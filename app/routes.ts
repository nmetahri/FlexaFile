import { layout, type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  layout("./theme/layouts/GenericLayout/index.tsx", { id: "generic-layout" }, [
    ...(await flatRoutes({ rootDirectory: "./theme/routes" }))
  ])
] satisfies RouteConfig;
