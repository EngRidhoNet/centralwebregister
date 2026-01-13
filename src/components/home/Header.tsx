import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// --- Import Logo ---
// Sesuaikan jumlah '../' dengan struktur folder project Anda
import logoImg from "../../assets/img/home/logo.png";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- 1. Scroll Detection Effect ---
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
          {/* --- Logo Section (Updated) --- */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img
              src={logoImg}
              alt="Medicare Logo"
              // h-8 sampai h-12 adalah ukuran standar navbar.
              // w-auto agar rasio gambar tidak gepeng.
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* --- Desktop Navigation (Pill Style) --- */}
          <nav className="hidden md:flex items-center space-x-2 bg-white/50 px-2 py-1.5 rounded-full border border-gray-100/50 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? /* Active State: Primary Blue Light Background + Primary Text */
                        "bg-[#2563EB]/10 text-[#2563EB] shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* --- Right Side Actions --- */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {}}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#2563EB]/30 transition-all duration-300 transform hover:-translate-y-0.5"
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
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  /* Mobile Active Text: Primary Blue */
                  isActive ? "text-[#2563EB]" : "text-gray-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <hr className="border-gray-100" />

          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {}}
              className="w-full py-3 text-center bg-[#2563EB] text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-[#2563EB]/40 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
