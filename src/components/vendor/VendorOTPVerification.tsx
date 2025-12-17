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
  email
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
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div className="text-center">
          <div className="mb-12">
            <h1 className="text-4xl font-bold">
              <span className="text-blue-600">Medi</span>
              <span className="text-red-500">Care</span>
            </h1>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src={hospitalIcon} 
                  alt="Hospital" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">Vendor</h2>
          
          <button 
            onClick={handleSelectRole}
            type="button"
            className="text-blue-600 flex items-center justify-center mx-auto hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Select another role
          </button>
        </div>
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">OTP Verification</h2>
              <p className="text-gray-600">
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
                    className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                ))}
              </div>

              <div className="text-center mb-6">
                <p className="text-sm text-gray-600">
                  00:{timer.toString().padStart(2, '0')} Left
                </p>
              </div>

              <button
                type="button"
                onClick={handleResend}
                disabled={timer > 0}
                className={`w-full mb-4 py-3.5 rounded-xl font-semibold transition-all ${
                  timer > 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                }`}
              >
                Send Again
              </button>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorOTPVerification;