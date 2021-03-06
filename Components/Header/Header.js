import Link from "next/link";

const Header = () => {
  const menu = (
    <>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <header className="shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {menu}
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl">TodoAPP</a>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal p-0">{menu}</ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
