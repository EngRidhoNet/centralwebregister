import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  VENDOR_REGISTRATION_SUCCESS_URL,
  DOCTOR_REGISTRATION_SUCCESS_URL
} from '../constants/constant';
import { usePageTitle } from '../hooks/usePageTitle';

const RegistrationSuccess: React.FC = () => {
  usePageTitle('Registration Success');
  const location = useLocation();

  // Get role from state or default to vendor
  const role = (location.state as { role?: string })?.role || 'vendor';

  useEffect(() => {
    // Don't redirect for nurses as they need to use mobile app
    if (role.toLowerCase() === 'nurse') {
      return;
    }

    // Redirect to appropriate login page after 3 seconds for other roles
    const timer = setTimeout(() => {
      let loginUrl = VENDOR_REGISTRATION_SUCCESS_URL;

      switch (role.toLowerCase()) {
        case 'doctor':
          loginUrl = DOCTOR_REGISTRATION_SUCCESS_URL;
          break;
        case 'vendor':
          loginUrl = VENDOR_REGISTRATION_SUCCESS_URL;
          break;
        default:
          loginUrl = VENDOR_REGISTRATION_SUCCESS_URL;
      }

      // Only redirect if URL is not empty
      if (loginUrl) {
        window.location.href = loginUrl;
      } else {
        console.warn(`Login URL for role "${role}" is not configured`);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [role]);

  // Get role display name
  const getRoleDisplayName = () => {
    switch (role.toLowerCase()) {
      case 'nurse':
        return 'Nurse';
      case 'doctor':
        return 'Doctor';
      case 'vendor':
        return 'Vendor';
      default:
        return 'User';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E3F2FD] via-[#F5F5F5] to-[#FCE4EC]">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Registration Successful!
          </h1>

          <p className="text-gray-600 text-lg mb-2">
            Your <span className="font-semibold text-blue-600">{getRoleDisplayName()}</span> account has been created successfully.
          </p>

          {role.toLowerCase() === 'nurse' ? (
            // Mobile app banner for nurses
            <>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 mb-6 mt-6">
                <div className="flex items-center justify-center mb-4">
                  <svg 
                    className="w-16 h-16 text-blue-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Please Login via Mobile App
                </h2>
                <p className="text-gray-700 text-base mb-2 leading-relaxed">
                  To complete your setup and start using Medicare services, please download and login through the
                </p>
                <p className="text-blue-600 text-xl font-bold mb-4">
                  Medicare One App
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500 text-base mb-8">
                You will be redirected to the login page shortly.
              </p>

              {/* Loading Animation */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>

              <p className="text-sm text-gray-400">
                Redirecting in 3 seconds...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;