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
    {
      name: "Dr. Pablo Ijoel",
      role: "Chief Medical Officer",
      image: doctor1Img,
    },
    {
      name: "Dr. Alexander Abdurrozzaaq",
      role: "Senior Neurologist",
      image: doctor2Img,
    },
    {
      name: "Dr. Onny Dmitriyevich",
      role: "Head of Pediatrics",
      image: doctor3Img,
    },
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
    <div className="bg-white min-h-screen w-full">
      <Header />

      <section className="relative pt-32 pb-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">Medicare</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are dedicated to providing the most advanced medical care with a personal touch. Your health is our priority, and our journey is defined by the
            lives we touch.
          </p>
        </div>
      </section>

      {/* 2. Mission & Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
              alt="Medical Team Meeting"
              className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/10 rounded-2xl z-0"></div>
          </div>

          <div>
            <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Improving Lives Through <br /> Advanced Medicine
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2010, Medicare started with a simple vision: to bridge the gap between complex medical treatments and compassionate human care. We
                believe that healing requires more than just medicine; it requires trust, understanding, and comfort.
              </p>
              <p>
                Today, we serve thousands of families with a network of specialized clinics, leveraging cutting-edge technology like telemedicine and
                AI-assisted diagnostics while keeping patient welfare at the core of everything we do.
              </p>
            </div>

            {/* Core Values Mini Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {values.map((val, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <svg className="w-8 h-8 text-purple-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.icon} />
                  </svg>
                  <h4 className="font-bold text-gray-900 mb-1">{val.title}</h4>
                  <p className="text-xs text-gray-500">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Section (Dark Background for Contrast) */}
      <section className="bg-gray-900 py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-center mb-4 text-purple-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our team of dedicated doctors and healthcare professionals is here to guide you on your path to recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden h-72">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="bg-white text-purple-600 p-2 rounded-full hover:bg-purple-600 hover:text-white transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-purple-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Prioritize Your Health?</h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Join thousands of satisfied patients who trust Medicare for their healthcare needs. Book an appointment today.
          </p>
          <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 relative z-10">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
};
