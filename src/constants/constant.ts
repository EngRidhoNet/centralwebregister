// API Base URL
export const BASE_API_URL = "https://dev.medicarebackend.com/api";

// Internal Routes
export const HOME_PAGE_URL = "/";
export const REGISTER_URL = "/register";
export const REGISTRATION_SUCCESS_URL = "/registration-success";

// Register Routes
export const DOCTOR_REGISTER_URL = "/register/doctor";
export const VENDOR_REGISTER_URL = "/register/vendor";
export const NURSE_REGISTER_URL = "/register/nurse";

// Terms and Conditions Routes
export const TERMS_AND_CONDITIONS_URL = "/terms";
export const DOCTOR_TERMS_AND_CONDITIONS_URL = "/terms/doctor";
export const VENDOR_TERMS_AND_CONDITIONS_URL = "/terms/vendor";
export const NURSE_TERMS_AND_CONDITIONS_URL = "/terms/nurse";

// External Login URLs (after successful registration)
export const DOCTOR_REGISTRATION_SUCCESS_URL = "http://103.224.93.92:8001/login";
export const VENDOR_REGISTRATION_SUCCESS_URL = "https://dev.medicarebackend.com/vendor/login";
export const NURSE_REGISTRATION_SUCCESS_URL = "https://dev.medicarebackend.com/nurse/login"; // TODO: Update with actual nurse login URL when available
