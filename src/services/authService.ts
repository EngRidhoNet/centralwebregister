import axios, { AxiosError } from 'axios';
import { BASE_API_URL } from '../constants/constant';
import type {
  RegisterRequest,
  RegisterResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
  ApiError,
  CompleteRegistrationResponse,
  UserRole,
} from '../types/api';

/**
 * Authentication Service
 * Handles all authentication operations for all user roles
 */
class AuthService {
  private baseURL: string;

  constructor() {
    this.baseURL = BASE_API_URL;
  }

  /**
   * Register new user (supports all roles)
   */
  async register(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    role: UserRole
  ): Promise<RegisterResponse> {
    try {
      const data: RegisterRequest = {
        email,
        password,
        name,
        phone_number: phoneNumber,
        role,
      };

      const response = await axios.post<RegisterResponse>(
        `${this.baseURL}/auth/register`,
        data
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Send OTP email verification
   */
  async sendEmailVerification(token: string): Promise<void> {
    try {
      await axios.get(`${this.baseURL}/auth/send-email`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Verify OTP code
   */
  async verifyEmail(
    email: string,
    otp: string,
    token: string
  ): Promise<VerifyEmailResponse> {
    try {
      const data: VerifyEmailRequest = {
        email,
        otp,
      };

      const response = await axios.post<VerifyEmailResponse>(
        `${this.baseURL}/auth/verify-email`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Complete registration with additional details
   * @param endpoint - Role-specific endpoint (e.g., 'vendor', 'nurse')
   * @param data - Form data with files
   * @param token - Auth token
   */
  async completeRegistration(
    endpoint: string,
    data: any,
    token: string
  ): Promise<CompleteRegistrationResponse> {
    try {
      const response = await axios.post<CompleteRegistrationResponse>(
        `${this.baseURL}/${endpoint}/complete-registration`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Handle API errors with detailed messages
   */
  private handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;

      if (axiosError.response) {
        const responseData = axiosError.response.data;
        const statusCode = axiosError.response.status;

        // Try to get the main error message
        const errorMessage = responseData?.message || '';
        const errors = responseData?.errors;

        // Handle validation errors (object format from Laravel)
        if (errors && typeof errors === 'object') {
          // Get the first validation error message
          const errorEntries = Object.entries(errors);
          if (errorEntries.length > 0) {
            const [_field, messages] = errorEntries[0];
            if (Array.isArray(messages) && messages.length > 0) {
              // Return the first validation error message
              return new Error(messages[0]);
            } else if (typeof messages === 'string') {
              return new Error(messages);
            }
          }
        }

        // List of generic error messages that should be replaced with more specific ones
        const genericMessages = [
          'registration failed',
          'verification failed',
          'an error occurred',
          'something went wrong',
          'internal server error',
          'bad request',
          'conflict',
        ];

        // Check if the message is too generic
        const isGenericMessage = genericMessages.some(generic =>
          errorMessage.toLowerCase().includes(generic)
        );

        // If we have a specific error message, use it
        if (errorMessage && !isGenericMessage) {
          return new Error(errorMessage);
        }

        // Fallback based on status code (for generic messages or no message)
        switch (statusCode) {
          case 400:
            return new Error('Invalid request. Please check your input.');
          case 401:
            return new Error('Authentication failed. Please login again.');
          case 403:
            return new Error('You do not have permission to perform this action.');
          case 404:
            return new Error('The requested resource was not found.');
          case 409:
            return new Error('This email or name is already registered. Please use different credentials.');
          case 422:
            return new Error('Validation failed. Please check your input.');
          case 429:
            return new Error('Too many requests. Please wait a moment and try again.');
          case 500:
            return new Error('Server error. Please try again later.');
          default:
            return new Error('An error occurred. Please try again.');
        }
      } else if (axiosError.request) {
        // Network error
        return new Error(
          'Network error. Please check your internet connection.'
        );
      }
    }

    // Handle Error instance
    if (error instanceof Error) {
      return error;
    }

    return new Error('An unexpected error occurred. Please try again.');
  }
}

// Export singleton instance
export const authService = new AuthService();