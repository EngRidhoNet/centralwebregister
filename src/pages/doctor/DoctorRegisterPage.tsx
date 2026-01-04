import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoctorRegisterForm from "../../components/doctor/DoctorRegisterForm";
import DoctorOTPVerification from "../../components/doctor/DoctorOTPVerification";
import { useDoctorRegistration } from "../../hooks/useDoctorRegistration";
import { REGISTRATION_SUCCESS_URL } from "../../constants/constant";
import { useToast } from "../../components/common/ToastContainer";
import { getErrorMessage } from "../../utils/errorHandler";

const DoctorRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { showError } = useToast();
  const { 
    currentStep, 
    registerData, 
    loading, 
    error, 
    handleRegisterSubmit, 
    handleOTPSubmit, 
    handleOTPResend, 
    clearError 
  } = useDoctorRegistration();

  // Redirect to success page when registration is complete
  useEffect(() => {
    if (currentStep === "success") {
      const timer = setTimeout(() => {
        navigate(REGISTRATION_SUCCESS_URL, {
          state: { role: "doctor" },
        });
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [currentStep, navigate]);

  // Show error toast with user-friendly message
  useEffect(() => {
    if (error) {
      const friendlyMessage = getErrorMessage(error);
      showError(friendlyMessage);
      clearError();
    }
  }, [error, clearError, showError]);

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-700 font-medium">Processing...</p>
            </div>
          </div>
        </div>
      )}

      {/* Register Form */}
      {currentStep === "register" && (
        <DoctorRegisterForm onSubmit={handleRegisterSubmit} />
      )}

      {/* OTP Verification */}
      {currentStep === "otp" && registerData && (
        <DoctorOTPVerification 
          onSubmit={handleOTPSubmit} 
          onResend={handleOTPResend} 
          email={registerData.email} 
        />
      )}

      {/* Success Message */}
      {currentStep === "success" && (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mb-4">
              <svg 
                className="w-20 h-20 text-green-500 mx-auto" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Verification Successful!
            </h2>
            <p className="text-gray-600">Redirecting...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorRegisterPage;