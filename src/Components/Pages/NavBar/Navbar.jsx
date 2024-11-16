import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllcategoryOption from "../../AllCategoryBtn/AllcategoryOption";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-[#FFFFFF]">
        <div className="container mx-auto flex justify-between items-center">
          <a href="" className="text-black text-2xl font-bold">
            <AllcategoryOption></AllcategoryOption>
          </a>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-black hover:text-blue-200">
              <h1 className="flex text-xl">
                {" "}
                Home
                <IoIosArrowDown className="mt-2 text-xl"></IoIosArrowDown>
              </h1>
            </Link>
            <Link to="/page" className="text-black hover:text-blue-200">
              <h1 className="flex text-xl">
                {" "}
                Page<IoIosArrowDown className="mt-2 text-xl"></IoIosArrowDown>
              </h1>
            </Link>
            <Link to="/shope" className="text-black hover:text-blue-200">
              <h1 className="flex text-xl">
                {" "}
                Shope<IoIosArrowDown className="mt-2 text-xl"></IoIosArrowDown>
              </h1>
            </Link>
          </div>

          <button
            onClick={handleMenuToggle}
            className="md:hidden text-black focus:outline-none"
          >
            <FaAlignJustify className="text-3xl font-bold"></FaAlignJustify>
          </button>

          <div className="group">
            <div className="text-center p-4 rounded-lg transition-all duration-300  hover:bg-black hover:text-white">
              <button className="text-xl font-bold group-hover:text-white text-[#F07F13]">
                Black Friday
              </button>
              <p className="group-hover:text-white font-bold">Get 45% off</p>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <Link
              to="/"
              className="block text-black py-2 px-4 hover:bg-blue-600"
            >
              Home
            </Link>
            <Link
              to="/page"
              className="block text-black py-2 px-4 hover:bg-blue-600"
            >
              Page
            </Link>
            <Link
              to="/shop"
              className="block text-black py-2 px-4 hover:bg-blue-600"
            >
              Shope
            </Link>
            <Link
              to="/blog"
              className="block text-black py-2 px-4 hover:bg-blue-600"
            >
              Blog
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
