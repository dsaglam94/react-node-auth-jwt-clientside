import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const DesktopNavigation = () => {
  return (
    <header className="w-full shadow-xl py-5">
      <nav className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="w-14">
              <img className="max-w-full" src={logo} alt="smoothie blender" />
            </div>
            <span className="hidden md:block font-bold text-xl">Smoothies</span>
          </div>
        </Link>
        <ul className="flex items-center gap-5 font-bold">
          <Link to="/login">
            <li className="hover:text-yellow-400">Sign in</li>
          </Link>
          <Link to="/signup">
            <li className="bg-yellow-300 px-6 py-2 rounded-full hover:text-red-400">
              Sign up
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
