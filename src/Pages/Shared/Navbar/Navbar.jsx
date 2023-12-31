import { Link } from "react-router-dom";
import logo from "../../../assets/images/obc3_txti_210819.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar  bg-opacity-30 z-10 bg-violet-200 text-violet-900 p-4">
        <div className="navbar-start ">
          <div className="dropdown ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 font-extrabold bg-white"
            >
              <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to='/alltoys'>
                <a>All Toys</a>
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              {user && (
                <Link to="/myToys">
                  <a>My Toys</a>
                </Link>
              )}
            </li>
            <li>
              {user && (
                <Link to="addToys">
                  <a>Add a Toys</a>
                </Link>
              )}
            </li>
            </ul>
          </div>
          <div className="md:flex items-center gap-4 ml-4">
            <img className="md:w-24" src={logo} alt="" />
            <h2 className="md:text-4xl md:font-extrabold ">Supper Kiddo</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-extrabold">
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to='/alltoys'>
                <a>All Toys</a>
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              {user && (
                <Link to="/myToys">
                  <a>My Toys</a>
                </Link>
              )}
            </li>
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
            <>
              <div className="flex gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <button
                  onClick={handleLogOut}
                  className="btn btn-primary font-bold"
                >
                  <Link to="/">Log Out</Link>
                </button>
              </div>
            </>
          ) : (
            <button className="btn  btn-primary mr-4 font-bold">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
