import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-white pt-20 pb-10 overflow-hidden">
      {/* --- Ambient Background Glow (Updated Colors) --- */}
      {/* Primary Blue Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Secondary Red Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EF4444]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* --- Decorative Top Line --- */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand & Address Column */}
          <div className="space-y-6">
            <div className="text-3xl font-bold tracking-tight">
              <span className="text-white">Medi</span>
              {/* Gradient Text: Primary to Secondary */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Care</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Providing world-class healthcare services with a personal touch. Your health is our priority.
            </p>

            <div className="flex items-start space-x-3 text-gray-400 text-sm">
              {/* Icon using Primary Color */}
              <svg className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p>23-29, Jalan Sena 1,</p>
                <p>Taman Rinting, 81750</p>
                <p>Masai, Johor, Malaysia</p>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Careers", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#2563EB] transition-all duration-300 hover:translate-x-1 inline-block text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {["Teleconsultation", "Home Nursing", "Pharmacy Delivery", "Specialist Visit"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#EF4444] transition-all duration-300 hover:translate-x-1 inline-block text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter & Socials */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest health tips.</p>

            <form className="flex flex-col space-y-3 mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all text-sm"
              />
              <button className="bg-gradient-to-r from-[#2563EB] to-[#EF4444] text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm shadow-lg shadow-[#2563EB]/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">© {currentYear} Medicare Inc. All rights reserved.</p>
          <div className="flex space-x-6 text-xs md:text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
