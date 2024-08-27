import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <main className="mx-auto max-w-6xl px-8 py-20 min-h-80">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default PublicLayout;
