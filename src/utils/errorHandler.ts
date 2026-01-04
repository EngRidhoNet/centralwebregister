const ERROR_MESSAGES: Record<string, string> = {
    // Validation errors
    'password_too_short': 'Password must be at least 8 characters long',
    'password_weak': 'Password must contain uppercase, lowercase, number, and special character',
    'email_invalid': 'Please enter a valid email address',
    'email_exists': 'This email is already registered',
    'phone_invalid': 'Please enter a valid phone number',
    'required_field': 'This field is required',
    
    // Network errors
    'network_error': 'Network error. Please check your internet connection',
    'timeout': 'Request timeout. Please try again',
    'server_error': 'Server error. Please try again later',
    
    // Auth errors
    'invalid_credentials': 'Invalid email or password',
    'account_locked': 'Your account has been locked. Please contact support',
    'otp_invalid': 'Invalid OTP code. Please check and try again',
    'otp_expired': 'OTP code has expired. Please request a new one',
    
    // Registration errors
    'registration_failed': 'Registration failed. Please try again',
    'verification_failed': 'Verification failed. Please try again',
  };
  
  /**
   * Transform error response to user-friendly message
   */
  export const getErrorMessage = (error: any): string => {
    // If error is already a string
    if (typeof error === 'string') {
      return ERROR_MESSAGES[error] || error;
    }
  
    // Handle axios/fetch error response
    if (error?.response?.data) {
      const { message, errors, error: errorCode } = error.response.data;
  
      // Handle validation errors (array of errors)
      if (errors && Array.isArray(errors)) {
        return errors.map((err: any) => {
          if (typeof err === 'string') return ERROR_MESSAGES[err] || err;
          if (err.message) return ERROR_MESSAGES[err.message] || err.message;
          if (err.msg) return ERROR_MESSAGES[err.msg] || err.msg;
          return 'Validation error';
        }).join(', ');
      }
  
      // Handle single error message
      if (message) {
        return ERROR_MESSAGES[message] || message;
      }
  
      if (errorCode) {
        return ERROR_MESSAGES[errorCode] || errorCode;
      }
    }
  
    // Handle network errors
    if (error?.message) {
      if (error.message.includes('Network')) {
        return ERROR_MESSAGES['network_error'];
      }
      if (error.message.includes('timeout')) {
        return ERROR_MESSAGES['timeout'];
      }
      return error.message;
    }
  
    // Default error message
    return 'An unexpected error occurred. Please try again';
  };
  
  /**
   * Validate password strength
   */
  export const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return ERROR_MESSAGES['password_too_short'];
    }
  
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      return ERROR_MESSAGES['password_weak'];
    }
  
    return null;
  };
  
  /**
   * Validate email format
   */
  export const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      return ERROR_MESSAGES['email_invalid'];
    }
  
    return null;
  };