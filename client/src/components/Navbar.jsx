import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../assets/logo.webp';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="rounded-full h-20" />

        {/* Basket Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-pink-500 text-4xl hover:scale-110 transition-transform"
          >
            🛒
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-pink-500 text-xl font-bold hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-3 md:p-0 text-pink-500 text-xl font-bold hover:underline"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
