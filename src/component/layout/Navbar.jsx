import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          daisyUI
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </li>
          <li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
