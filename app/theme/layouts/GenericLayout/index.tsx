import Header from "@components/organisms/Header";
import { Outlet, Scripts, ScrollRestoration } from "react-router";

const GenericLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
      <Scripts />
    </>
  );
};

export default GenericLayout;
