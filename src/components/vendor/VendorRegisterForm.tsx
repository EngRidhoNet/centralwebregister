import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { VendorRegisterForm as VendorRegisterFormType } from '../../types';
import hospitalIcon from '../../assets/img/icon-hospital.svg';
import { REGISTER_URL } from '../../constants/constant';

interface VendorRegisterFormProps {
  onSubmit: (data: VendorRegisterFormType) => void;
}

const VendorRegisterForm: React.FC<VendorRegisterFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<VendorRegisterFormType>({
    vendorName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreementAccepted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSubmit(formData);
  };

  const handleSelectRole = () => {
    navigate(REGISTER_URL);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold">
              <span className="text-blue-600">Medi</span>
              <span className="text-red-500">Care</span>
            </h1>
          </div>

          {/* Hospital Illustration */}
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

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Register</h2>
              <p className="text-gray-600">Please complete the following data</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleChange}
                  placeholder="eg: John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eg: john.doe@gmail.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="eg: +60 10-1234568"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="agreementAccepted"
                  name="agreementAccepted"
                  checked={formData.agreementAccepted}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="agreementAccepted" className="text-sm text-gray-700 leading-relaxed">
                  By ticking, you're confirm that you have read, understood and agree to Medicare{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-6"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegisterForm;