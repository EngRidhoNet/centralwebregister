import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { OTPVerification } from '../../types';
import hospitalIcon from '../../assets/img/icon-hospital.svg';
import { REGISTER_URL } from '../../constants/constant';

interface VendorOTPVerificationProps {
  onSubmit: (data: OTPVerification) => void;
  onResend: () => void;
  email: string;
}

const VendorOTPVerification: React.FC<VendorOTPVerificationProps> = ({
  onSubmit,
  onResend,
}) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(50);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      onSubmit({ otp: otpValue });
    }
  };

  const handleResend = () => {
    setTimer(50);
    setOtp(['', '', '', '', '', '']);
    onResend();
  };

  const handleSelectRole = () => {
    navigate(REGISTER_URL);
  };

  return (
    <div className="h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#E3F2FD] via-[#F5F5F5] to-[#FCE4EC] overflow-hidden">
      <div className="w-full max-w-[1200px] h-[85vh] bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="flex h-full">
          {/* Left Side - Illustration */}
          <div className="w-1/2 px-6 py-8 flex flex-col items-center justify-center bg-white">
            {/* Logo */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-center">
                <span className="text-blue-600">Medi</span>
                <span className="text-red-500">Care</span>
              </h1>
            </div>

            {/* Hospital Illustration */}
            <div className="mb-8">
              <div className="w-[300px] h-[300px] bg-gradient-to-br from-gray-50 to-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.1)] overflow-hidden">
                <img 
                  src={hospitalIcon} 
                  alt="Hospital" 
                  className="w-full h-full object-contain scale-90"
                />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">Vendor</h2>
            
            <button 
              onClick={handleSelectRole}
              type="button"
              className="text-blue-600 flex items-center justify-center hover:text-blue-700 transition-colors font-medium text-base"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Select another role
            </button>
          </div>

          {/* Right Side - OTP Form */}
          <div className="w-1/2 px-10 py-8 bg-white flex items-center">
            <div className="w-full max-w-[450px] mx-auto">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">OTP Verification</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We will send you OTP Code to your email. Please enter the code correctly
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="flex gap-3 justify-center mb-6">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-14 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                  ))}
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 font-medium">
                    00:{timer.toString().padStart(2, '0')} Left
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResend}
                  disabled={timer > 0}
                  className={`w-full mb-4 py-3 rounded-xl font-semibold text-base transition-all ${
                    timer > 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-200'
                      : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Send Again
                </button>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-base hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorOTPVerification;