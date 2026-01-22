import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

export const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5",
      title: "Visit Clinic",
      description: "Walk-in appointments and scheduled visits at our state-of-the-art medical facilities.",
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "Home Nursing",
      description: "Professional nursing care provided in the comfort and privacy of your own home.",
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "Teleconsultation",
      description: "Connect with healthcare professionals via high-quality video calls anywhere, anytime.",
    },
    {
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      title: "Pharmacy & E-Prescription",
      description: "Get your prescriptions digitally and have medicines delivered from our partnered pharmacies.",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Ambulance & Telemedicine",
      description: "24/7 Emergency response coordination and immediate telemedicine triage support.",
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Visit Specialist",
      description: "Book consultations with top-tier specialists across various medical fields effortlessly.",
    },
    {
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Doctor Home Visit",
      description: "Schedule a certified doctor to visit your location for personalized medical attention.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* --- Ambient Background Effects (Updated Colors) --- */}
      {/* Primary Color Blob */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      {/* Secondary Color Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EF4444]/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive <br />
            {/* Gradient from Primary to Secondary */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Healthcare Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide a wide range of medical services to ensure your health is taken care of, from emergency needs to routine checkups.
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>

      {/* --- Custom CSS for Keyframes --- */}
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-card-entry {
            opacity: 0;
            animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

// --- Modern Card Component ---
interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => (
  <div
    className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-[#2563EB]/10 hover:-translate-y-2 transition-all duration-500 border border-gray-100 animate-card-entry flex flex-col h-full"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Decorative Gradient Blob on Hover (Using Primary Color) */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Icon Container */}
    <div className="relative w-14 h-14 mb-6">
      {/* Background Circle - Primary Color Light to Solid */}
      <div className="absolute inset-0 bg-[#2563EB]/10 rounded-2xl group-hover:scale-110 group-hover:bg-[#2563EB] transition-all duration-300 ease-out" />

      {/* Icon SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-[#2563EB] transition-colors duration-300">{title}</h3>

    <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow relative z-10">{description}</p>

    {/* 'Learn More' Link - Primary Color */}
    <div className="relative z-10 flex items-center text-[#2563EB] font-semibold text-sm group-hover:underline cursor-pointer">
      <span className="mr-2">Learn more</span>
      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
);
