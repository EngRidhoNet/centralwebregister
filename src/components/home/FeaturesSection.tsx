import React from "react";
import doctorImg from "../../assets/img/home/doctor.png";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: "Easy Mobile Access",
      description: "Book appointments, view medical records, and communicate with doctors directly from your mobile device.",
    },
    {
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: "Clinic Management",
      description: "Comprehensive web platform for healthcare providers to manage patients, appointments, and medical records.",
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security and HIPAA compliance.",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gray-50/50">
      {/* --- 1. Ambient Background Blobs --- */}
      {/* Primary Blue Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      {/* Secondary Red Blob */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EF4444]/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- 2. Header Section with Gradient --- */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-semibold tracking-wide uppercase text-xs shadow-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Makes Medicare The
            <br />
            {/* Gradient Text: Primary to Secondary */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Best Choice For You?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- 3. Image Column with Floating Animation --- */}
          <div className="relative order-2 md:order-1">
            {/* Decorative Circle behind image: Primary/Secondary Mix */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/20 to-[#EF4444]/20 rounded-full blur-2xl opacity-40 transform scale-90 animate-pulse"></div>

            <img src={doctorImg} alt="Healthcare Professionals" className="relative w-full h-auto z-10 drop-shadow-2xl animate-float" />
          </div>

          {/* --- 4. Features Column --- */}
          <div className="space-y-6 order-1 md:order-2">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* --- Custom CSS for Float Animation --- */}
      <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
            opacity: 0; /* Start hidden */
            animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

interface FeatureCardProps extends Feature {
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => (
  <div
    className="group flex gap-6 p-6 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#2563EB]/10 border border-transparent hover:border-[#2563EB]/20 animate-slide-in cursor-default"
    style={{ animationDelay: `${index * 0.2}s` }} // Staggered delay
  >
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-[#2563EB] group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 leading-relaxed group-hover:text-gray-600">{description}</p>
    </div>
  </div>
);
