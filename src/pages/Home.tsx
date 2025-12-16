import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Blue Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12">
        <div className="text-white text-center">
          <h1 className="text-6xl font-bold mb-4">MediCare</h1>
          <p className="text-2xl text-blue-100 mb-8">Healthcare service wherever you are</p>
          <p className="text-lg text-blue-200">Join our network of healthcare professionals</p>
        </div>
      </div>

      {/* Right Side - Options */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome</h2>
            <p className="text-gray-600 mb-8 text-center">Please select your registration type</p>

            <div className="space-y-4">
              {/* Customer */}
              <Link
                to="/register"
                className="block w-full bg-white text-blue-600 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors text-center"
              >
                Register as Patient
              </Link>

              {/* Doctor */}
              <Link
                to="/doctor/register"
                className="block w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-center"
              >
                Register as Doctor
              </Link>

              {/* Vendor */}
              <Link
                to="/vendor/register"
                className="block w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-center"
              >
                Register as Vendor
              </Link>

              {/* Nurse */}
              <Link
                to="/nurse/register"
                className="block w-full bg-white text-blue-600 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors text-center"
              >
                Register as Nurse
              </Link>

              <div className="pt-6 border-t border-gray-200 mt-6">
                <p className="text-center text-gray-600 text-sm">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              By registering, you agree to our{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
