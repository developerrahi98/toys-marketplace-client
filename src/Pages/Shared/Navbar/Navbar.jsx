import { Link } from "react-router-dom";
import logo from "../../../assets/images/obc3_txti_210819.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-violet-200 text-violet-900 p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Toys</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <img className="w-24" src={logo} alt="" />
            <h2 className="text-4xl font-extrabold">Supper Kiddo</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a>All Toys</a>
            </li>
            <li>
              <Link to="/blogs">
                <a>Blogs</a>
              </Link>
            </li>
            <li>{user && <a>My Toys</a>}</li>
            <li>
              {user && (
                <Link to="addToys">
                  <a>Add a Toys</a>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <div className="w-10 rounded-full">
                  <UserCircleIcon className="h-12 w-12 text-blue-500" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline btn-primary"
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-outline btn-primary mr-4">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
