import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-blue-600">Medi</span>
            <span className="text-red-500">Care</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-12">
          <a href="#home" className="text-gray-800 hover:text-blue-600 transition font-medium">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-blue-600 transition">
            About Us
          </a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">
            Contact Us
          </a>
        </nav>

        {/* <Button onClick={() => navigate("/register")} icon>
          Go To Portal
        </Button> */}
      </div>
    </header>
  );
};
