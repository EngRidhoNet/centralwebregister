import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#2563EB]/5">
      {/* --- 1. Ambient Background Blobs (Fluid Vibe) --- */}
      {/* Primary Blue Blob */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply" />
      {/* Secondary Red Blob */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#EF4444]/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none mix-blend-multiply" />

      {/* --- 2. Animated Medical Pattern --- */}
      <MedicalIconsPattern />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/60 backdrop-blur-xl border border-white/80 p-10 md:p-16 rounded-3xl shadow-2xl shadow-[#2563EB]/10">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Join {/* Gradient Text: Primary to Secondary */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Medicare</span> to provide the best healthcare for
              others
            </h2>
            <p className="text-lg text-gray-600 mb-0 leading-relaxed">
              Become part of a network that prioritizes patient well-being and technological innovation.
            </p>
          </div>

          {/* Button (Commented out in previous code, styled just in case) */}
          {/* <div className="flex-shrink-0">
            <button
              onClick={() => navigate("/register")}
              className="group relative bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#2563EB]/20 hover:-translate-y-1 active:translate-y-0"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2563EB] to-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3">
                Go To Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div> */}
        </div>
      </div>

      {/* --- Custom Keyframes for Floating Animation --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// --- Sub-component: Animated Pattern with Primary/Secondary Colors ---
const MedicalIconsPattern: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Top Right - Box (Primary Blue Border) */}
    <div className="absolute top-10 right-20 opacity-20 animate-float" style={{ animationDuration: "7s" }}>
      <div className="w-24 h-24 border-4 border-[#2563EB] rounded-2xl transform rotate-12" />
    </div>

    {/* Top Right - Shield Icon (Secondary Red) */}
    <div className="absolute top-32 right-40 w-16 h-16 opacity-20 animate-float" style={{ animationDuration: "8s", animationDelay: "1s" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#EF4444] w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    </div>

    {/* Middle Right - Hospital Icon (Primary Blue) */}
    <div className="absolute top-1/4 right-10 w-20 h-20 opacity-20 animate-float" style={{ animationDuration: "6s", animationDelay: "2s" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#2563EB] w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    </div>

    {/* Center Right - Circle (Secondary Red Border) */}
    <div
      className="absolute top-1/3 right-1/4 w-14 h-14 border-2 border-[#EF4444] rounded-full opacity-20 animate-float"
      style={{ animationDuration: "9s", animationDelay: "0.5s" }}
    />

    {/* Center - Doctor Case (Primary Blue) */}
    <div className="absolute top-1/2 right-32 w-24 h-24 opacity-10 animate-float" style={{ animationDuration: "7.5s", animationDelay: "1.5s" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#2563EB] w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>

    {/* Bottom Left - Floating Square (Primary Blue Border) */}
    <div
      className="absolute bottom-20 left-20 w-16 h-16 border-4 border-[#2563EB]/30 rounded-2xl transform -rotate-12 animate-float"
      style={{ animationDuration: "8s" }}
    />

    {/* Bottom Right - Phone Icon (Secondary Red) */}
    <div className="absolute bottom-32 right-28 w-18 h-18 opacity-20 animate-float" style={{ animationDuration: "6.5s", animationDelay: "1s" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#EF4444] w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </div>
  </div>
);
