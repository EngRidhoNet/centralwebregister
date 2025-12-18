import { useState } from "react";
import { authService } from "../services/authService";
import type { UserRole } from "../types/api";
import type { OTPVerification } from "../types";

type Step = "register" | "otp" | "success";

interface RegistrationData {
  email: string;
  name: string;
  phone: string;
}

interface UseRegistrationReturn<T extends RegistrationData> {
  currentStep: Step;
  registerData: T | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  handleRegisterSubmit: (data: T, password: string, confirmPassword: string) => Promise<void>;
  handleOTPSubmit: (data: OTPVerification) => Promise<void>;
  handleOTPResend: () => Promise<void>;
  clearError: () => void;
}

export const useRegistration = <T extends RegistrationData>(role: UserRole): UseRegistrationReturn<T> => {
  const [currentStep, setCurrentStep] = useState<Step>("register");
  const [registerData, setRegisterData] = useState<T | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handle registration form submission
   */
  const handleRegisterSubmit = async (data: T, password: string, confirmPassword: string) => {
    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Call register API
      const response = await authService.register(data.email, password, data.name, data.phone, role);

      // Save token and data
      setToken(response.data.token);
      setRegisterData(data);

      // Move to OTP step
      setCurrentStep("otp");

      console.log("✅ Registration successful. OTP has been sent to your email.");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Registration failed";
      setError(errorMessage);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle OTP verification
   */
  const handleOTPSubmit = async (data: OTPVerification) => {
    if (!token || !registerData) {
      setError("Invalid session. Please start registration again.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Verify OTP
      console.log("Register Data:", registerData);
      console.log("Verifying OTP...", data.otp);
      await authService.verifyEmail(registerData.email, data.otp, token);

      // Move to success step (langsung ke success, tidak ke post-register)
      setCurrentStep("success");

      console.log("✅ Email verified successfully.");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "OTP verification failed";
      setError(errorMessage);
      console.error("OTP verification error:", err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle resend OTP
   */
  const handleOTPResend = async () => {
    if (!token) {
      setError("Invalid session. Please start registration again.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await authService.sendEmailVerification(token);

      console.log("✅ OTP has been resent to your email.");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to resend OTP";
      setError(errorMessage);
      console.error("Resend OTP error:", err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Clear error message
   */
  const clearError = () => {
    setError(null);
  };

  return {
    currentStep,
    registerData,
    token,
    loading,
    error,
    handleRegisterSubmit,
    handleOTPSubmit,
    handleOTPResend,
    clearError,
  };
};
