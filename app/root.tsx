import "./app.scss";
import "@config/i18n.ts";

import Settings from "@config/settings.ts";
import { Route } from "@rr/types/app/+types/root.ts";
import { NotFound, ServerError, Unauthorized } from "@theme/pages/Errors";
import { StatusCodes } from "http-status-codes";
import { useTranslation } from "react-i18next";
import { isRouteErrorResponse, Links, Meta, Outlet } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];

export default function App() {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language}>
      <head>
        <title>{Settings.name}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === StatusCodes.NOT_FOUND ? "404" : "Error";
    details =
      error.status === StatusCodes.NOT_FOUND
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  if (isRouteErrorResponse(error)) {
    if (error.status === StatusCodes.NOT_FOUND) {
      return (
        <>
          <NotFound />
          {stack && (
            <pre className="error-stack">
              <code>{stack}</code>
            </pre>
          )}
        </>
      );
    }
    if (error.status === StatusCodes.UNAUTHORIZED) {
      return (
        <>
          <Unauthorized />
          {stack && (
            <pre className="error-stack">
              <code>{stack}</code>
            </pre>
          )}
        </>
      );
    }
    if (error.status >= StatusCodes.INTERNAL_SERVER_ERROR) {
      return (
        <>
          <ServerError />
          {stack && (
            <pre className="error-stack">
              <code>{stack}</code>
            </pre>
          )}
        </>
      );
    }
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
