
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-8 sm:h-10 sm:w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">PrepAi</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar} className="p-2">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 top-[61px] z-20 bg-neutral-900 w-full p-6 flex flex-col justify-start items-center lg:hidden">
            <ul className="w-full text-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 border-b border-gray-800">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col w-full space-y-4 mt-6">
              <a href="#" className="py-3 px-3 border rounded-md text-center">
                Sign In
              </a>
              <a
                href="#"
                className="py-3 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-center"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;