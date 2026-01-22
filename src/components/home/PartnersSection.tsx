import React from "react";
import { useNavigate } from "react-router-dom";

// --- Types ---
interface PartnerType {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const PartnersSection: React.FC = () => {
  const navigate = useNavigate();

  const partnerTypes: PartnerType[] = [
    {
      title: "Provider Partner",
      description: "Clinics, Hospitals, and Labs. Expand your patient reach and digitize operations.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      link: "/partners/provider",
    },
    {
      title: "Technology Partner",
      description: "ISVs, IoT Device makers, and SaaS platforms looking to integrate via API.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      link: "/partners/technology",
    },
    {
      title: "Implementation Partner",
      description: "Consultants and agencies helping healthcare providers adopt digital solutions.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      link: "/partners/implementation",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden" id="partners">
      {/* --- Ambient Background --- */}
      {/* Primary Blue Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />
      {/* Secondary Red Blob */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EF4444]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">
            Partner with <span className="text-[#2563EB]">Medicare</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Join our rapidly growing ecosystem. Choose your partnership path and help us build the future of healthcare together.
          </p>
        </div>

        {/* --- PARTNER TYPES GRID (Navigation Cards) --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerTypes.map((type, idx) => (
            <div
              key={idx}
              onClick={() => navigate(type.link)}
              className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-[#2563EB]/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Hover Gradient Overlay: Primary to Secondary */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#EF4444] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#2563EB]/5 rounded-2xl flex items-center justify-center text-[#2563EB] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={type.icon} />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2563EB] transition-colors">{type.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{type.description}</p>

              <div className="flex items-center text-[#2563EB] font-semibold text-sm group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* --- CTA BOX (Action Area) --- */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl">
          {/* Background decoration: Gradient from Primary to Secondary */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#2563EB] to-[#EF4444] opacity-20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="grid md:grid-cols-2 items-center relative z-10">
            {/* Left: Call to Action */}
            <div className="p-10 md:p-16">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to join our Partner Network?</h3>
              <p className="text-gray-400 mb-8 text-lg">Start your journey today. Check the requirements and register your organization to get verified.</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("#")}
                  className="px-8 py-4 bg-[#2563EB] hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-[#2563EB]/30 transition-all transform hover:-translate-y-1"
                >
                  Register as Vendor
                </button>
                <button
                  onClick={() => navigate("#")}
                  className="px-8 py-4 bg-transparent border border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 font-semibold rounded-xl transition-all"
                >
                  View Requirements
                </button>
              </div>
            </div>

            {/* Right: Existing Login & Links */}
            <div className="bg-gray-800/50 p-10 md:p-16 h-full flex flex-col justify-center border-l border-gray-700/50 backdrop-blur-sm">
              <div className="mb-8">
                <h4 className="text-white font-bold text-lg mb-2">Already a Partner?</h4>
                <p className="text-gray-400 text-sm mb-4">Access your dashboard to manage services and analytics.</p>
                <a href="/partner-portal/login" className="inline-flex items-center text-[#2563EB] hover:text-blue-400 font-bold hover:underline">
                  Login to Partner Portal
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
