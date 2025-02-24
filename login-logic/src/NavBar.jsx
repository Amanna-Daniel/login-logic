import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4"> {/* Example styling */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"> {/* Dropdown menu */}
              <Link
                to="/signup"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link 
              to="/" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;