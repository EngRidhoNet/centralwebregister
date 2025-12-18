import { useRegistration } from './useRegistration';
import type { NurseRegisterForm } from '../types';

interface NurseRegistrationData {
  email: string;
  name: string;
  phone: string;
  fullName: string;
}

export const useNurseRegistration = () => {
  const {
    currentStep,
    registerData,
    token,
    loading,
    error,
    handleRegisterSubmit: baseHandleRegisterSubmit,
    handleOTPSubmit,
    handleOTPResend,
    clearError,
  } = useRegistration<NurseRegistrationData>('Nurse');

  // Wrapper for nurse-specific register
  const handleRegisterSubmit = async (data: NurseRegisterForm) => {
    const nurseData: NurseRegistrationData = {
      email: data.email,
      name: data.fullName,
      phone: data.phone,
      fullName: data.fullName,
    };

    await baseHandleRegisterSubmit(nurseData, data.password, data.confirmPassword);
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