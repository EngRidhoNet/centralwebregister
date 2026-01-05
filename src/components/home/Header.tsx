import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Pastikan install lucide-react atau ganti dengan svg icon lain
// import { Button } from "../common/Button"; // Uncomment jika ingin pakai button custom

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- 1. Scroll Detection Effect ---
  // Header akan berubah style saat user scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup mobile menu saat rute berubah
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* --- Logo Section --- */}
          <div className="flex items-center cursor-pointer group" onClick={() => navigate("/")}>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900 group-hover:text-purple-600 transition-colors">Medi</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Care</span>
            </span>
          </div>

          {/* --- Desktop Navigation (Pill Style) --- */}
          <nav className="hidden md:flex items-center space-x-2 bg-white/50 px-2 py-1.5 rounded-full border border-gray-100/50 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive ? "bg-purple-100 text-purple-700 shadow-sm" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* --- Right Side Actions --- */}
          <div className="hidden md:flex items-center gap-4">
            {/* Login Link (Optional) */}
            <button onClick={() => navigate("/login")} className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">
              Log In
            </button>

            {/* CTA Button */}
            <button
              onClick={() => navigate("/register")}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Dropdown (Animated) --- */}
      <div
        className={`fixed inset-x-0 top-[60px] z-40 bg-white border-b border-gray-100 shadow-xl md:hidden transition-all duration-300 ease-in-out transform origin-top ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-6 py-6 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `text-lg font-medium transition-colors ${isActive ? "text-purple-600" : "text-gray-600"}`}
            >
              {link.name}
            </NavLink>
          ))}
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 text-center text-gray-600 font-semibold border border-gray-200 rounded-xl hover:bg-gray-50"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/register")}
              className="w-full py-3 text-center bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-700"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
