import React, { useState } from "react";
import { Header } from "./Header";

// --- Types ---
interface ContactInfoItem {
  icon: string;
  title: string;
  details: string[];
  action?: string;
  isEmergency?: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

export const ContactUsPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  const contactDetails: ContactInfoItem[] = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Call Us",
      details: ["+60 7-388 8888", "+60 12-345 6789"], // Updated format Malaysia
      action: "Call now",
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Email Us",
      details: ["support@medicare.com.my", "admin@medicare.com.my"],
      action: "Send email",
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Visit Us",
      details: ["23-29, Jalan Sena 1", "Taman Rinting, 81750", "Masai, Johor, Malaysia"],
      action: "Get directions",
    },
  ];

  const faqs: FaqItem[] = [
    { question: "Do you accept insurance?", answer: "Yes, we accept most major insurance plans including AIA, Prudential, Allianz, and Great Eastern." },
    { question: "Can I book appointments online?", answer: "Absolutely. Use the 'Book Appointment' button on our homepage or download our mobile app." },
    {
      question: "Is emergency care available 24/7?",
      answer: "Yes, our emergency department operates 24 hours a day, 7 days a week, including public holidays.",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full font-sans">
      <Header />
      {/* --- 1. HERO SECTION (Fluid & Animated) --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#EF4444]/5 rounded-full blur-[100px] animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our services or need to schedule an appointment? Our team is here to help you 24/7.
          </p>
        </div>
      </section>
      {/* --- 2. MAIN CONTENT CONTAINER --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN: Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Emergency Card (Special Styling) */}
            <div className="group bg-white p-6 rounded-3xl border border-[#EF4444]/20 shadow-lg shadow-[#EF4444]/5 hover:shadow-[#EF4444]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EF4444]/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EF4444]"></span>
                </div>
                <h3 className="text-[#EF4444] font-bold text-lg">Emergency Cases</h3>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">Please do not use the form for immediate life-threatening emergencies.</p>
              <a
                href="tel:999"
                className="flex items-center justify-center w-full py-3 bg-[#EF4444] text-white font-bold rounded-xl hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call 999 Now
              </a>
            </div>

            {/* Standard Info Cards */}
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#2563EB]/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#2563EB]/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                  {item.details.map((line, i) => (
                    <p key={i} className="text-gray-500 text-sm leading-snug">
                      {line}
                    </p>
                  ))}
                  <button className="text-[#2563EB] text-sm font-semibold mt-3 hover:underline flex items-center">
                    {item.action}
                    <svg
                      className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Modern Form */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 h-full relative overflow-hidden">
              {/* Decorative blob inside form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-500 mb-10">We usually respond within 24 hours.</p>

                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center h-80 text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 max-w-sm">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                    <button onClick={() => setFormStatus("idle")} className="mt-8 text-[#2563EB] font-bold hover:text-blue-700 underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                          placeholder="+60..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Department</label>
                      <div className="relative">
                        <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none appearance-none text-gray-600">
                          <option>General Inquiry</option>
                          <option>Cardiology</option>
                          <option>Pediatrics</option>
                          <option>Neurology</option>
                          <option>Billing & Insurance</option>
                        </select>
                        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-[#2563EB] text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-[#2563EB]/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center transform active:scale-[0.98]"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FAQ SECTION (Accordion Style Look) --- */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know about our services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-6 rounded-2xl border border-transparent hover:border-[#2563EB]/20 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- Custom CSS for Animations --- */}
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
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
        @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
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
        .animate-bounce-slow {
            animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
