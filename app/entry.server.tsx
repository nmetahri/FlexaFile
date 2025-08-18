import type { RenderToPipeableStreamOptions } from "react-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import { I18nextProvider } from "react-i18next";
import type { EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { StatusCodes } from "http-status-codes";
import { isbot } from "isbot";
import { PassThrough } from "node:stream";

import { createI18nInstance } from "@config/i18n.server";
import { getLanguageFromRequest } from "@utils/internalization.ts";

export const streamTimeout = 5_000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) {
  const lng = getLanguageFromRequest(request);
  const i18nInstance = await createI18nInstance(lng);

  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const userAgent = request.headers.get("user-agent");

    const readyOption: keyof RenderToPipeableStreamOptions =
      (userAgent && isbot(userAgent)) || routerContext.isSpaMode
        ? "onAllReady"
        : "onShellReady";

    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={i18nInstance}>
        <ServerRouter context={routerContext} url={request.url} />
      </I18nextProvider>,
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = StatusCodes.INTERNAL_SERVER_ERROR;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );

    setTimeout(abort, streamTimeout + 1000);
  });
}
