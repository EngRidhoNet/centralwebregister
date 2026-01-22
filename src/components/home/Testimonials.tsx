import React from "react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  color: string; // Tailwind Gradient classes
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Alexander Abdurrozzaaq",
      role: "CTO of Medimedi",
      text: "The efficiency of this platform is unmatched. It has completely transformed how we manage patient records and appointments. Simply brilliant.",
      // Variasi 1: Primary Blue Gradient
      color: "from-[#2563EB] to-[#1E40AF]",
    },
    {
      name: "Onny Dmitriyevich",
      role: "CEO of Medimedi",
      text: "Security was our top concern, and Medicare delivered. The HIPAA compliance features give us and our patients complete peace of mind.",
      // Variasi 2: Secondary Red Gradient
      color: "from-[#EF4444] to-[#B91C1C]",
    },
    {
      name: "Pablo Ijoel",
      role: "CMO of Medimedi",
      text: "Finally, a healthcare solution that puts the user experience first. The interface is intuitive, clean, and incredibly responsive on mobile devices.",
      // Variasi 3: Primary to Secondary Mix
      color: "from-[#2563EB] to-[#EF4444]",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      {/* --- 1. Ambient Background Effects --- */}
      {/* Primary Blue Blob */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      {/* Secondary Red Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EF4444]/10 rounded-full blur-[100px] translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- 2. Header Section --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by Healthcare <br />
            {/* Gradient Text: Primary to Secondary */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Professionals Worldwide</span>
          </h2>
          <p className="text-lg text-gray-500">See what our partners and users have to say about their experience with the Medicare platform.</p>
        </div>

        {/* --- 3. Cards Grid --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>

      {/* --- 4. Custom Animation Styles --- */}
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-card-entry {
            opacity: 0; /* Start hidden */
            animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

// --- Sub-component ---
interface TestimonialCardProps extends Testimonial {
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text, color, index }) => (
  <div
    className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-card-entry"
    style={{ animationDelay: `${index * 0.15}s` }} // Staggered delay logic
  >
    {/* Hover Glow Effect (Behind Card) */}
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`} />

    <div className="relative h-full flex flex-col justify-between">
      <div>
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">"{text}"</p>

        {/* Decorative Quote Mark (Background) */}
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-2 -translate-y-2">
          <svg className={`w-24 h-24 bg-gradient-to-br ${color} bg-clip-text text-transparent`} fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zm-12 10H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-4zm12 0h-4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-4z"></path>
          </svg>
        </div>
      </div>

      {/* Author Section */}
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg shadow-md ring-4 ring-white`}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          {/* Role text gradient */}
          <div className={`text-sm font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{role}</div>
        </div>
      </div>
    </div>
  </div>
);
