import React from "react";
import { Header } from "./Header";
import doctor1Img from "../../assets/img/doctors/doctor1.png";
import doctor2Img from "../../assets/img/doctors/doctor2.png";
import doctor3Img from "../../assets/img/doctors/doctor3.png";

// --- Types ---
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface ValueProps {
  title: string;
  description: string;
  icon: string;
}

// --- Main Component ---
export const AboutUsPage: React.FC = () => {
  // Data Mockup
  const stats: Stat[] = [
    { label: "Happy Patients", value: "15k+", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    {
      label: "Expert Doctors",
      value: "350+",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    { label: "Years Experience", value: "12+", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    {
      label: "Hospital Rooms",
      value: "500+",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5",
    },
  ];

  const team: TeamMember[] = [
    { name: "Dr. Pablo Ijoel", role: "Chief Medical Officer", image: doctor1Img },
    { name: "Dr. Alexander Abdurrozzaaq", role: "Senior Neurologist", image: doctor2Img },
    { name: "Dr. Onny Dmitriyevich", role: "Head of Pediatrics", image: doctor3Img },
  ];

  const values: ValueProps[] = [
    {
      title: "Compassion",
      description: "We treat everyone with kindness and empathy.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    { title: "Excellence", description: "Delivering the highest standard of medical care.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    {
      title: "Integrity",
      description: "Honesty and transparency in all our actions.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full font-sans">
      <Header />

      {/* --- 1. HERO SECTION (Fluid Background) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#EF4444]/5 rounded-full blur-[100px] animate-float-delayed" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            Advancing Healthcare <br />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Compassion</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We bridge the gap between complex medical treatments and human care. Your health journey is our priority, defined by the lives we touch every day.
          </p>
        </div>
      </section>

      {/* --- 2. MISSION SECTION (Glassmorphism Cards) --- */}
      <section className="py-20 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Composition */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#2563EB]/20 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="Medical Team"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EF4444]/10 rounded-full flex items-center justify-center text-[#EF4444]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Trusted By</p>
                  <p className="text-lg font-bold text-gray-900">1 Million+ Families</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gradient-to-br from-[#2563EB]/20 to-[#EF4444]/20 rounded-[2.5rem] blur-xl"></div>
          </div>

          {/* Right: Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                Medicare started with a simple vision: to bridge the gap between medical expertise and human empathy. We believe healing requires trust,
                understanding, and comfort.
              </p>
              <p>Today, we leverage AI-assisted diagnostics while ensuring patient welfare remains at our core.</p>
            </div>

            {/* Core Values with Hover Effects */}
            <div className="grid sm:grid-cols-3 gap-4">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-[#2563EB]/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 mb-3 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">{val.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. STATS SECTION (Modern Dark Theme) --- */}
      <section className="py-20 bg-[#0f172a] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EF4444]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800/50">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4 text-[#EF4444]">
                  <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</div>
                <div className="text-[#2563EB] text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. TEAM SECTION (Floating Cards) --- */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Expert care from the industry's best. Our team is dedicated to guiding you on your path to recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-2xl hover:shadow-[#2563EB]/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />

                  {/* Social/Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Profile &rarr;
                    </span>
                  </div>
                </div>

                <div className="text-center px-2 pb-2">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-[#2563EB] font-medium text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CTA SECTION (Fluid Gradient) --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl shadow-[#2563EB]/20 animate-fade-in-up">
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#EF4444]"></div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

          <div className="relative z-10 p-12 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Prioritize Your Health?</h2>
            <p className="text-blue-50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied patients who trust Medicare for their healthcare needs. Simple, fast, and caring.
            </p>
            <button className="bg-white text-[#2563EB] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* --- Custom CSS for Animations --- */}
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes floatDelayed {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(20px) scale(1.05); }
        }

        .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0; /* Start hidden */
        }
        .animate-float-slow {
            animation: floatSlow 10s ease-in-out infinite;
        }
        .animate-float-delayed {
            animation: floatDelayed 12s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  );
};
