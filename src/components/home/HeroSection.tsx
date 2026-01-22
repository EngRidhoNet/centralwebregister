import React from "react";
import { Button } from "../common/Button";
import heroAppImage from "../../assets/img/home/mockup.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
      {/* --- Ambient Background Effects (Updated Colors) --- */}
      {/* Primary Blue Blob */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[100px] -translate-y-1/2 animate-pulse" />
      {/* Secondary Red Blob */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#EF4444]/10 rounded-full blur-[80px] translate-x-1/3" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* --- LEFT COLUMN: Text Content --- */}
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-sm font-medium mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
            </span>
            New standard for healthcare
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Healthcare. <br className="hidden md:block" />
            {/* Gradient Text: Primary Blue -> Secondary Red -> Primary Blue */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#EF4444] to-[#2563EB] bg-300% animate-gradient">
              Anytime. Anywhere.
            </span>
          </h1>

          <p
            className="text-lg text-gray-600 mb-10 leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Experience the future of medical care right from your pocket. Book appointments, consult via video, and manage prescriptions instantly.
          </p>

          <div
            className="flex justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0 mb-12"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="relative group">
              {/* Button Glow: Primary to Secondary */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] to-[#EF4444] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative">
                <Button size="lg" icon>
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: 3D Fluid Image View --- */}
        <div
          className="relative flex justify-center lg:justify-end animate-fade-in-up opacity-0 perspective-1000"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          {/* Decorative Back Glow: Primary to Secondary */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-gradient-to-tr from-[#2563EB]/20 to-[#EF4444]/20 blur-[80px] rounded-full pointer-events-none animate-pulse-slow" />

          {/* 3D Phone Container Wrapper */}
          <div className="relative w-full max-w-[320px] animate-float-3d transform-style-3d">
            <div className="relative rounded-[2.5rem] bg-gray-900 shadow-2xl overflow-hidden border-[8px] border-gray-900 ring-1 ring-white/10 group transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0 transform rotate-y-[-12deg] rotate-x-[5deg]">
              {/* Image */}
              <img src={heroAppImage} alt="Medicare Mobile App Interface" className="w-full h-auto object-cover" />

              {/* Glossy Reflection Overlay (Efek Kaca) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Shine Line Animation */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[-25deg] animate-shine" />
            </div>

            {/* Drop Shadow 3D yang ikut bergerak */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/20 blur-xl rounded-[100%] animate-shadow-scale" />

            {/* Floating Badge (Optional - adds depth) */}
            <div className="absolute top-20 -right-8 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50 animate-float-delayed hidden md:block transform translate-z-20">
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2563EB]"></span>
                </span>
                <span className="text-xs font-bold text-gray-800">App Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CSS Styles --- */}
      <style>{`
        /* Setup 3D Environment */
        .perspective-1000 {
            perspective: 1000px;
        }
        .transform-style-3d {
            transform-style: preserve-3d;
        }
        .translate-z-20 {
            transform: translateZ(20px);
        }
        
        /* Rotasi 3D Statis Awal (Miring sedikit) */
        .rotate-y-\[-12deg\] {
            transform: rotateY(-12deg) rotateX(5deg);
        }
        
        /* Hover Effect: Kembali lurus */
        .group:hover .rotate-y-\[-12deg\] {
            transform: rotateY(0deg) rotateX(0deg) scale(1.02);
        }

        /* 1. Floating Animation (Naik Turun) */
        @keyframes float3D {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-3d {
          animation: float3D 6s ease-in-out infinite;
        }

        /* 2. Shadow Scaling (Mengecil saat HP naik) */
        @keyframes shadowScale {
            0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.2; }
            50% { transform: translateX(-50%) scale(0.8); opacity: 0.1; }
        }
        .animate-shadow-scale {
            animation: shadowScale 6s ease-in-out infinite;
        }

        /* 3. Floating Badge Delayed */
        @keyframes floatDelayed {
            0%, 100% { transform: translateY(0) translateZ(30px); }
            50% { transform: translateY(-15px) translateZ(30px); }
        }
        .animate-float-delayed {
            animation: floatDelayed 5s ease-in-out infinite 1s;
        }

        /* 4. Shine Animation (Kilatan Cahaya Lewat) */
        @keyframes shine {
            0% { left: -100%; opacity: 0; }
            50% { opacity: 0.5; }
            100% { left: 200%; opacity: 0; }
        }
        .animate-shine {
            animation: shine 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Standard Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradientFlow 4s linear infinite;
        }
        .bg-300\% { background-size: 300%; }
      `}</style>
    </section>
  );
};
