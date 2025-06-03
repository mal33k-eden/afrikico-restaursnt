import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(! isMenuOpen);
  };
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm top-0 sticky border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex justify-between items-center h-24">
        <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="afrikico logo"
              className="h-36 w-auto object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-9 text-gray-700 font-bold text-[18px]">
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-orange" 
                    : "relative text-gray-700 hover:text-orange-400 transition-colors duration-300 "
                }
             >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="tel:587-983-1350"
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-orange-400 text-[18px] transition-colors duration-300"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">587-983-1350
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 text-gray-700 font-bold text-[18px]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  to={item.path} 
                  className={`text-gray-700 hover:text-orange-400 transition-colors duration-300 py-1 ${
                    item.isActive ? "text-primary-orange" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="tel:587-983-1350"
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-400 transition-colors duration-300 text-[18px] py-2 border-t border-gray-100 mt-4 pt-4"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">587-983-1350
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
