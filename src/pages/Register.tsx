import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorIcon from "../assets/img/icon-doctor.svg";
import nurseIcon from "../assets/img/icon-nurse.svg";
import hospitalIcon from "../assets/img/icon-hospital.svg";
import { DOCTOR_REGISTER_URL, VENDOR_REGISTER_URL, NURSE_REGISTER_URL } from "../constants/constant";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleContinue = () => {
    if (selectedRole === "doctor") {
      navigate(DOCTOR_REGISTER_URL);
    } else if (selectedRole === "nurse") {
      navigate(NURSE_REGISTER_URL);
    } else if (selectedRole === "vendor") {
      navigate(VENDOR_REGISTER_URL);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-16 md:p-20">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">
            <span className="text-blue-600">Medi</span>
            <span className="text-red-500">Care</span>
          </h1>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Please Select Your Role
          </h2>
          <p className="text-gray-500 text-base">
            Select your role to continue and access features tailored to your responsibilities
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Doctor Card */}
          <button
            onClick={() => setSelectedRole("doctor")}
            className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
              selectedRole === "doctor"
                ? "border-blue-500 bg-blue-50/30 shadow-lg"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            {/* Selection Indicator */}
            <div className="absolute top-5 left-5">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedRole === "doctor"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedRole === "doctor" && (
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Icon */}
            <div className="mb-6 mt-4">
              <div 
                className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center p-6 transition-all duration-300 ${
                  selectedRole === "" || selectedRole === "doctor"
                    ? "bg-blue-50"
                    : "bg-gray-100"
                }`}
              >
                <img
                  src={doctorIcon}
                  alt="Doctor"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    selectedRole !== "" && selectedRole !== "doctor" 
                      ? "grayscale opacity-30 brightness-150" 
                      : ""
                  }`}
                />
              </div>
            </div>

            {/* Label */}
            <h3 className={`text-xl font-semibold transition-colors ${
              selectedRole !== "" && selectedRole !== "doctor"
                ? "text-gray-400"
                : "text-gray-900"
            }`}>
              Doctor
            </h3>
          </button>

          {/* Nurse Card */}
          <button
            onClick={() => setSelectedRole("nurse")}
            className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
              selectedRole === "nurse"
                ? "border-blue-500 bg-blue-50/30 shadow-lg"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            {/* Selection Indicator */}
            <div className="absolute top-5 left-5">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedRole === "nurse"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedRole === "nurse" && (
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Icon */}
            <div className="mb-6 mt-4">
              <div 
                className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center p-6 transition-all duration-300 ${
                  selectedRole === "" || selectedRole === "nurse"
                    ? "bg-pink-50"
                    : "bg-gray-100"
                }`}
              >
                <img
                  src={nurseIcon}
                  alt="Nurse"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    selectedRole !== "" && selectedRole !== "nurse" 
                      ? "grayscale opacity-30 brightness-150" 
                      : ""
                  }`}
                />
              </div>
            </div>

            {/* Label */}
            <h3 className={`text-xl font-semibold transition-colors ${
              selectedRole !== "" && selectedRole !== "nurse"
                ? "text-gray-400"
                : "text-gray-900"
            }`}>
              Nurse
            </h3>
          </button>

          {/* Vendor Card */}
          <button
            onClick={() => setSelectedRole("vendor")}
            className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
              selectedRole === "vendor"
                ? "border-blue-500 bg-blue-50/30 shadow-lg"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            {/* Selection Indicator */}
            <div className="absolute top-5 left-5">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedRole === "vendor"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedRole === "vendor" && (
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Icon */}
            <div className="mb-6 mt-4">
              <div 
                className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center p-6 transition-all duration-300 ${
                  selectedRole === "" || selectedRole === "vendor"
                    ? "bg-gray-100"
                    : "bg-gray-100"
                }`}
              >
                <img
                  src={hospitalIcon}
                  alt="Vendor"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    selectedRole !== "" && selectedRole !== "vendor" 
                      ? "grayscale opacity-30 brightness-150" 
                      : ""
                  }`}
                />
              </div>
            </div>

            {/* Label */}
            <h3 className={`text-xl font-semibold transition-colors ${
              selectedRole !== "" && selectedRole !== "vendor"
                ? "text-gray-400"
                : "text-gray-900"
            }`}>
              Vendor
            </h3>
          </button>
        </div>

        {/* Continue Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`px-12 py-3.5 rounded-full font-semibold text-white text-base transition-all duration-300 inline-flex items-center gap-2 ${
              selectedRole
                ? "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg cursor-pointer"
                : "bg-blue-400 cursor-not-allowed opacity-60"
            }`}
          >
            Continue
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;