import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 relative overflow-hidden">
      <MedicalIconsPattern />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">Join Medicare to provide the best healthcare for others</h2>
          </div>

          {/* <div className="flex-shrink-0">
                        <button
                            onClick={() => navigate("/register")}
                            className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-2xl transition-all inline-flex items-center gap-3 hover:scale-105 shadow-lg"
                        >
                            Go To Portal
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

const MedicalIconsPattern: React.FC = () => (
  <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
    <div className="absolute top-10 right-20 w-24 h-24 border-4 border-blue-400 rounded-2xl transform rotate-12"></div>
    <div className="absolute top-32 right-40 w-16 h-16">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-400 w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    </div>
    <div className="absolute top-1/4 right-10 w-20 h-20">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-400 w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    </div>
    <div className="absolute top-1/3 right-32 w-14 h-14 border-3 border-pink-400 rounded-full"></div>
    <div className="absolute top-1/2 right-24 w-20 h-20">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-400 w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
    <div className="absolute top-2/3 right-16 w-16 h-16 border-4 border-blue-400 rounded-2xl transform -rotate-12"></div>
    <div className="absolute bottom-32 right-28 w-18 h-18">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-pink-400 w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </div>
    <div className="absolute bottom-20 right-44 w-12 h-12 bg-purple-300 rounded-xl transform rotate-45 opacity-60"></div>
    <div className="absolute bottom-1/4 right-8 w-20 h-20">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-400 w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </div>
    <div className="absolute top-20 right-52 w-10 h-10 bg-pink-300 rounded-full opacity-60"></div>
  </div>
);
