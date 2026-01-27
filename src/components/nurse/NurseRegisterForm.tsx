import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { NurseRegisterForm as NurseRegisterFormType } from "../../types";
import nurseIcon from "../../assets/img/icon-nurse.svg";
import { NURSE_TERMS_AND_CONDITIONS_URL, REGISTER_URL } from "../../constants/constant";
import { useToast } from "../common/ToastContainer";

// Eye icons for password visibility toggle
const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeSlashIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

interface NurseRegisterFormProps {
  onSubmit: (data: NurseRegisterFormType) => void;
}

const NurseRegisterForm: React.FC<NurseRegisterFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { showError, showWarning } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="min. 8 characters"
                      required
                      minLength={8}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="min. 8 characters"
                      required
                      minLength={8}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    >
                      {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </button>
                  </div>
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