import { Outlet, Scripts, ScrollRestoration } from "react-router";
import Header from "@components/organisms/Header";

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
