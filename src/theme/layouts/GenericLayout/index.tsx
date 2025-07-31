import { Outlet, Scripts, ScrollRestoration } from "react-router";

const GenericLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
      <Scripts />
    </>
  );
};

export default GenericLayout;
