import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-blue-600">Medi</span>
              <span className="text-red-500">Care</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#home" className="text-gray-800 hover:text-blue-600 transition font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">
              About Us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">
              Contact Us
            </a>
          </nav>
          
          <button 
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium flex items-center gap-2"
          >
            Go To Portal
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Healthcare Service<br />
              Wherever You Are
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Connecting patients with healthcare providers through innovative technology
            </p>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg inline-flex items-center gap-3">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Browser Chrome */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-semibold text-blue-600">MediCare</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-56 bg-white border-r border-gray-200 p-6 space-y-2">
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm font-medium">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm font-medium">Billing</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold">History</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm font-medium">Manage Doctor</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span className="text-sm font-medium">Manage Item</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm font-medium">Reports</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 bg-gray-50/50">
                  {/* Top Cards */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {/* Clinic Details Card */}
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex gap-4">
                        <img 
                          src="/clinic-photo.jpg" 
                          alt="Clinic" 
                          className="w-24 h-24 rounded-lg object-cover bg-gray-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden w-24 h-24 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                          PC
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-sm mb-1">
                            POLIKLINIK PENAWAR JANAELEKTRIK<br/>SULTAN ISKANDAR
                          </h3>
                          <p className="text-xs text-gray-600 mb-2">
                            Group: KUMPULAN PERUBATAN PENAWAR SDN BHD<br/>
                            Email: janaelektriksipoliklinik@penawar.com
                          </p>
                          <p className="text-xs text-gray-500">
                            JSTEER JANAELEKTRIK SULTAN ISKANDAR RAHAMAN PENJAMAN<br/>
                            TNB 81700 PASIR GUDANG JOHOR PHONE : FAX :
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Logged In Card */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-700 mb-4">Logged In As</h4>
                      <p className="text-sm font-bold text-gray-900 mb-3">
                        POLIKLINIK PENAWAR JANAELEKTRIK SULTAN ISKANDAR
                      </p>
                      <div className="bg-blue-50 rounded-lg p-3 mb-3">
                        <p className="text-xs text-blue-800 font-medium">
                          Current Doctor [1] On Duty
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        DR. MOHD KHAIRUL BIN MANSOR
                      </p>
                    </div>
                  </div>

                  {/* History Section */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">History</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Date Range:</span>
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>01</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>Desember</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>2024</option>
                        </select>
                        <span className="text-sm text-gray-600">to</span>
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>01</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>Desember</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>2025</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm text-gray-600">Status:</span>
                      <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm flex-1 max-w-xs">
                        <option>Show All Status</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Makes Medicare The<br />Best Choice For You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Doctor Circle Image */}
            <div className="relative">
              <img 
                src="/doctors-circle.png" 
                alt="Healthcare Professionals" 
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback */}
              <div className="hidden relative w-full aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-4 border-gray-200"></div>
                </div>
                
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-xl border-4 border-white"></div>
                <div className="absolute top-1/3 right-12 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-xl border-4 border-white"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 shadow-xl border-4 border-white"></div>
                <div className="absolute bottom-1/3 left-12 w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-xl border-4 border-white"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-xl border-4 border-white"></div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Mobile Access</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Book appointments, view medical records, and communicate with doctors directly from your mobile device.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clinic Management</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive web platform for healthcare providers to manage patients, appointments, and medical records.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Private</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your health data is protected with enterprise-grade security and HIPAA compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Experience Healthcare at Your Fingertips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Mobile App Card */}
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-12">
              <div className="mb-8">
                <img 
                  src="/mobile-app-preview.png" 
                  alt="Mobile App" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback */}
                <div className="hidden bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-auto">
                  <div className="text-gray-900 font-semibold text-xl mb-6">How are you, Faza?</div>
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="text-sm text-gray-600 mb-1">Balance</div>
                    <div className="text-2xl font-bold text-gray-900">RM 0.00</div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-4">Services</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-100 rounded-xl p-4 text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-2"></div>
                      <div className="text-xs font-medium">Visit Clinic</div>
                    </div>
                    <div className="bg-red-100 rounded-xl p-4 text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-xl mx-auto mb-2"></div>
                      <div className="text-xs font-medium">Call Ambulance</div>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-2"></div>
                      <div className="text-xs font-medium">Home Nursing</div>
                    </div>
                    <div className="bg-yellow-100 rounded-xl p-4 text-center">
                      <div className="w-12 h-12 bg-yellow-500 rounded-xl mx-auto mb-2"></div>
                      <div className="text-xs font-medium">Visit Pharmacy</div>
                    </div>
                    <div className="bg-purple-100 rounded-xl p-4 text-center col-span-2">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-2"></div>
                      <div className="text-xs font-medium">Teleconsultation</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Mobile App For Patients</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Access your complete healthcare journey from anywhere. Book appointments, view test results, manage prescriptions, and stay connected with your healthcare providers.
              </p>
            </div>

            {/* Web Platform Card */}
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-400 to-red-400 p-12">
              <div className="mb-8">
                <img 
                  src="/web-platform-preview.png" 
                  alt="Web Platform" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback */}
                <div className="hidden bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="flex gap-6">
                    <div className="w-48 space-y-2">
                      <div className="text-xs text-gray-600 py-2">Dashboard</div>
                      <div className="text-xs text-gray-600 py-2">Billing</div>
                      <div className="text-xs text-blue-600 font-semibold py-2 bg-blue-50 px-3 rounded">History</div>
                      <div className="text-xs text-gray-600 py-2">Manage Doctor</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-700 mb-3">History</div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="bg-gray-100 p-2 rounded">Date</div>
                        <div className="bg-gray-100 p-2 rounded">Patient</div>
                        <div className="bg-gray-100 p-2 rounded">Status</div>
                        <div className="bg-gray-100 p-2 rounded">Action</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Web Platform for Healthcare Vendor</h3>
              <p className="text-red-100 text-lg leading-relaxed">
                Powerful web dashboard for healthcare providers to manage patient records, schedule appointments, track treatments, and streamline clinic operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Our Users Are Saying<br />About Medicare
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Della Rosa",
                role: "CTO of Medicare",
                text: "Lorem ipsum dolor sit amet consectetur. Nulla arcu et nibh mattis faucibus hunc in tellus. Tincidunt malesuada diam in elementum.",
                color: "from-blue-400 to-blue-600"
              },
              {
                name: "Mitch Evans",
                role: "CEO of Medicare",
                text: "Phasellus verus donec, vulputat vestibulum nulla. Id rholin eget ag sit in amet arcu accumsan. Iaculis gravida felis ut vestibulum pellentesque aut dolar pulvinar.",
                color: "from-purple-400 to-purple-600"
              },
              {
                name: "Ricky Dion",
                role: "CMO of Medicare",
                text: "Lloureet tincidunt eget cursitor sit stem ullamcorper curus. Pretium fringilla lectus aliquet quam adipiscing. Fells habitasse duis blandit sed urnd sem.",
                color: "from-pink-400 to-pink-600"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-10 leading-tight">
            Join Medicare to provide the best<br />healthcare for others
          </h2>
          <button 
            onClick={() => navigate("/register")}
            className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3 hover:scale-105"
          >
            Go To Portal
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-800">
            <div className="mb-6 md:mb-0">
              <div className="text-3xl font-bold mb-4">
                <span className="text-blue-400">Medi</span>
                <span className="text-red-400">Care</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">23-29, Jalan Sena 1, Taman Rinting, 81750</p>
              <p className="text-gray-400 text-sm">Masai, Johor, Malaysia</p>
            </div>
            
            <div className="flex gap-10">
              <a href="#privacy" className="text-gray-400 hover:text-white transition font-medium">Privacy Policy</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition font-medium">Contact Us</a>
              <a href="#careers" className="text-gray-400 hover:text-white transition font-medium">Careers</a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            Medicare © 2025. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;