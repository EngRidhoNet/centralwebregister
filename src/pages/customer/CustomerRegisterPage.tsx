import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mengubah import komponen ke folder customer
import CustomerRegisterForm from "../../components/customer/CustomerRegisterForm";
import CustomerOTPVerification from "../../components/customer/CustomerOTPVerification";
import CustomerPostRegister from "../../components/customer/CustomerPostRegister";

// Mengubah import tipe data
import type { CustomerRegisterForm as CustomerRegisterFormType, CustomerPostRegisterForm, OTPVerification } from "../../types";

type Step = "register" | "otp" | "post-register" | "success";

const CustomerRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>("register");

  // State untuk data register customer
  const [registerData, setRegisterData] = useState<CustomerRegisterFormType | null>(null);

  const handleRegisterSubmit = (data: CustomerRegisterFormType) => {
    setRegisterData(data);
    // TODO: Call API to send OTP to Customer
    console.log("Customer Register data:", data);
    setCurrentStep("otp");
  };

  const handleOTPSubmit = (data: OTPVerification) => {
    // TODO: Call API to verify OTP
    console.log("OTP:", data);
    setCurrentStep("post-register");
  };

  const handleOTPResend = () => {
    // TODO: Call API to resend OTP
    console.log("Resending OTP...");
  };

  const handlePostRegisterSubmit = (data: CustomerPostRegisterForm) => {
    // TODO: Call API to complete customer registration
    console.log("Complete customer registration data:", data);
    setCurrentStep("success");

    // Redirect to success page or login after 2 seconds
    setTimeout(() => {
      navigate("/registration-success");
    }, 2000);
  };

  return (
    <>
      {/* Step 1: Basic Register */}
      {currentStep === "register" && <CustomerRegisterForm onSubmit={handleRegisterSubmit} />}

      {/* Step 2: OTP Verification */}
      {currentStep === "otp" && registerData && <CustomerOTPVerification onSubmit={handleOTPSubmit} onResend={handleOTPResend} email={registerData.email} />}

      {/* Step 3: Complete Profile (Post Register) */}
      {currentStep === "post-register" && registerData && (
        <CustomerPostRegister
          onSubmit={handlePostRegisterSubmit}
          initialData={{
            fullName: registerData.fullName,
            email: registerData.email,
            phone: registerData.phone,
          }}
        />
      )}

      {/* Step 4: Success */}
      {currentStep === "success" && (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mb-4">
              {/* Menggunakan warna hijau (green-500) yang umum untuk sukses customer */}
              <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Account Created!</h2>
            <p className="text-gray-600">Your account has been successfully registered.</p>
            <p className="text-gray-600 mt-2">Redirecting to login...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerRegisterPage;
