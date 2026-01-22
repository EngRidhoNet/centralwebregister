import React from "react";

interface Industry {
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export const IndustriesSection: React.FC = () => {
  const primaryColor = "#2563EB"; // Blue
  const secondaryColor = "#EF4444"; // Red

  const industries: Industry[] = [
    {
      title: "Clinics",
      description: "Streamline patient flow and digitize records for single or multi-specialty clinics.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5",
    },
    {
      title: "Hospitals",
      description: "Integrated hospital management systems for complex workflows and inpatient care.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      title: "Pharmacies",
      description: "Digital prescription management and inventory control for modern pharmacies.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      title: "Diagnostic Labs",
      description: "Efficient sample tracking and automated report generation for laboratories.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: "Ambulance Providers",
      description: "Real-time fleet tracking and emergency response coordination systems.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Corporate / Employers",
      description: "Employee wellness programs and corporate health benefit management.",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      badge: "Enterprise",
    },
    {
      title: "Government / Public Health",
      description: "Scalable solutions for population health monitoring and public sector clinics.",
      icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
      badge: "Public Sector",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* --- Ambient Background --- */}
      {/* Menggunakan Hex Code Custom untuk Blob */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EF4444]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6 leading-tight">
            Powering the Entire <br />
            {/* Gradient Text: Primary to Secondary */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Healthcare Industry</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are a single clinic or a large hospital network, our platform adapts to your specific operational needs.
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <IndustryCard key={index} {...item} index={index} />
          ))}

          {/* Call to Action Card */}
          <div className="group relative bg-gradient-to-br from-[#2563EB] to-[#EF4444] p-8 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center text-white h-full min-h-[280px] hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <div className="mb-4 p-4 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
            <p className="text-white/80 text-sm">Don't see your industry? Let's discuss a custom solution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Card Component ---
interface CardProps extends Industry {
  index: number;
}

const IndustryCard: React.FC<CardProps> = ({ title, description, icon, badge, index }) => (
  <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
    {/* Badge (Optional) - Menggunakan Secondary Color (Merah) agar menonjol */}
    {badge && (
      <div className="absolute top-4 right-4 bg-[#EF4444] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm">
        {badge}
      </div>
    )}

    {/* Icon Container */}
    <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/10 group-hover:bg-[#2563EB] transition-colors duration-300 flex items-center justify-center mb-6">
      <svg className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
      </svg>
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2563EB] transition-colors">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{description}</p>

    {/* Bottom Decoration line (Gradient Primary to Secondary) */}
    <div className="w-12 h-1 bg-gray-100 mt-6 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#EF4444] transition-all duration-500"></div>
  </div>
);
