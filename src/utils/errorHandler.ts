const ERROR_MESSAGES: Record<string, string> = {
  // Validation errors
  'password_too_short': 'Password must be at least 8 characters long',
  'password_weak': 'Password must contain uppercase, lowercase, number, and special character',
  'passwords_not_match': 'Passwords do not match. Please check and try again',
  'password_mismatch': 'Passwords do not match. Please check and try again',
  'confirm_password': 'Passwords do not match. Please check and try again',
  'email_invalid': 'Please enter a valid email address',
  'email_exists': 'This email is already registered. Please use a different email or login',
  'email_taken': 'This email is already registered. Please use a different email or login',
  'email.unique': 'This email is already registered. Please use a different email or login',
  'phone_invalid': 'Please enter a valid phone number',
  'phone_exists': 'This phone number is already registered',
  'phone_taken': 'This phone number is already registered',
  'phone_number.unique': 'This phone number is already registered',
  'name_exists': 'This name is already taken. Please choose a different name',
  'name_taken': 'This name is already taken. Please choose a different name',
  'name.unique': 'This name is already taken. Please choose a different name',
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
  'otp.invalid': 'Invalid OTP code. Please check and try again',
  'otp.expired': 'OTP code has expired. Please request a new one',

  // Registration errors
  'registration_failed': 'Registration failed. Please try again',
  'verification_failed': 'Verification failed. Please try again',
  'user_already_exists': 'An account with this email already exists',
  'duplicate_entry': 'This information is already registered in our system',

  // Vendor specific errors
  'vendor_name_exists': 'This vendor name is already registered',
  'vendor_name.unique': 'This vendor name is already registered',
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