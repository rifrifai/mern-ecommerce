import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-neutral py-2 text-neutral-content">
        <div className="mx-auto max-w-6xl px-8 flex justify-center sm:justify-end">
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign In
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Don&apos;t you have an account?
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
