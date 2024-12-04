import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold tracking-wide hover:text-gray-300 transition-colors">
          Book Management
        </h1>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/add"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-2 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 transition-colors"
          >
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
