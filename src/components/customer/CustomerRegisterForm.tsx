import React, { useState } from "react";
import InputField from "../common/InputField";
import type { CustomerRegisterForm as CustomerRegisterFormType } from "../../types";

interface CustomerRegisterFormProps {
  onSubmit: (data: CustomerRegisterFormType) => void;
}

const CustomerRegisterForm: React.FC<CustomerRegisterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CustomerRegisterFormType>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreementAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Blue Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold mb-4">MediCare</h1>
          <p className="text-xl text-blue-100">Healthcare service wherever you are</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Registration</h2>
            <p className="text-gray-600 mb-8">Join MediCare as a healthcare professional</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />

              <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" required />

              <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" required />

              <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />

              <InputField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />

              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  id="agreementAccepted"
                  name="agreementAccepted"
                  checked={formData.agreementAccepted}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreementAccepted" className="text-sm text-gray-700">
                  I agree to the Terms and Conditions <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Continue to OTP Verification
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegisterForm;
