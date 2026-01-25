import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { NurseRegisterForm as NurseRegisterFormType } from "../../types";
import nurseIcon from "../../assets/img/icon-nurse.svg";
import { NURSE_TERMS_AND_CONDITIONS_URL, REGISTER_URL } from "../../constants/constant";
import { useToast } from "../common/ToastContainer";

interface NurseRegisterFormProps {
  onSubmit: (data: NurseRegisterFormType) => void;
}

const NurseRegisterForm: React.FC<NurseRegisterFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { showError, showWarning } = useToast();
  const [formData, setFormData] = useState<NurseRegisterFormType>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreementAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      const sanitizedValue = value.replace(/[^0-9]/g, "");

      setFormData((prev) => ({
        ...prev,
        phone: sanitizedValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      showError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      showError("Password must be at least 8 characters long");
      return;
    }

    if (!formData.agreementAccepted) {
      showWarning("Please accept the Terms of Service");
      return;
    }

    onSubmit(formData);
  };

  const handleSelectRole = () => {
    navigate(REGISTER_URL);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 sm:py-8 bg-gradient-to-br from-[#E3F2FD] via-[#F5F5F5] to-[#FCE4EC] overflow-auto">
      <div className="w-full max-w-[1200px] min-h-[500px] md:h-auto lg:h-[85vh] bg-white rounded-[24px] md:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side - Illustration (hidden on mobile, visible on lg+) */}
          <div className="hidden lg:flex lg:w-1/2 px-6 py-8 flex-col items-center justify-center bg-white">
            {/* Logo */}
            <div className="mb-6 xl:mb-8">
              <h1 className="text-3xl xl:text-4xl font-bold text-center">
                <span className="text-blue-600">Medi</span>
                <span className="text-red-500">Care</span>
              </h1>
            </div>

            {/* Nurse Illustration */}
            <div className="mb-6 xl:mb-8">
              <div className="w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.1)] overflow-hidden">
                <img src={nurseIcon} alt="Nurse" className="w-full h-full object-contain scale-90" />
              </div>
            </div>

            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4 xl:mb-6">Nurse</h2>

            <button
              onClick={handleSelectRole}
              type="button"
              className="text-blue-600 flex items-center justify-center hover:text-blue-700 transition-colors font-medium text-sm xl:text-base"
            >
              <svg className="w-4 h-4 xl:w-5 xl:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Select another role
            </button>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 px-5 sm:px-8 lg:px-10 py-6 sm:py-8 bg-white flex items-center overflow-y-auto">
            <div className="w-full max-w-[450px] mx-auto">
              {/* Mobile Header - Only visible on mobile */}
              <div className="lg:hidden mb-6 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="text-blue-600">Medi</span>
                  <span className="text-red-500">Care</span>
                </h1>
                <p className="text-gray-600 text-sm font-medium">Nurse Registration</p>
                <button
                  onClick={handleSelectRole}
                  type="button"
                  className="mt-3 text-blue-600 inline-flex items-center justify-center hover:text-blue-700 transition-colors font-medium text-sm"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Select another role
                </button>
              </div>

              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Register</h2>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Please complete the following data</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="eg: John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="eg: john.doe@gmail.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="eg: 060101234568 (do not use + or -)"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="min. 8 characters"
                    required
                    minLength={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="min. 8 characters"
                    required
                    minLength={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="agreementAccepted"
                    name="agreementAccepted"
                    checked={formData.agreementAccepted}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="agreementAccepted" className="text-xs text-gray-700 leading-relaxed">
                    By ticking, you're confirm that you have read, understood and agree to Medicare{" "}
                    <a href={NURSE_TERMS_AND_CONDITIONS_URL} className="text-blue-600 hover:underline font-medium">
                      Terms of Service
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-base hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-5"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseRegisterForm;