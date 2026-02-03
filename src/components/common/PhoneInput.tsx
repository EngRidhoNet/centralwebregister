import React from 'react';
import PhoneInputWithCountry from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Use type alias for the phone value
type PhoneValue = string | undefined;

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

/**
 * Phone input component with country code selector
 * Outputs phone number in E.164 format (e.g., +60123456789)
 * For API: strips the + prefix to send only digits with country code
 */
const PhoneInput: React.FC<PhoneInputProps> = ({
    value,
    onChange,
    placeholder = 'Enter phone number',
    className = '',
}) => {
    const handleChange = (newValue: PhoneValue) => {
        onChange(newValue || '');
    };

    return (
        <PhoneInputWithCountry
            international
            countryCallingCodeEditable={false}
            defaultCountry="MY"
            value={value || undefined}
            onChange={handleChange}
            placeholder={placeholder}
            className={`phone-input-container ${className}`}
        />
    );
};

/**
 * Utility function to format phone number for API
 * Removes the + prefix, returns only country code + phone number
 * Example: +60123456789 -> 60123456789
 */
export const formatPhoneForAPI = (phone: string): string => {
    if (!phone) return '';
    return phone.replace(/^\+/, '');
};

/**
 * Utility function to parse phone from API format to display format
 * Adds the + prefix back
 * Example: 60123456789 -> +60123456789
 */
export const parsePhoneFromAPI = (phone: string): string => {
    if (!phone) return '';
    if (phone.startsWith('+')) return phone;
    return `+${phone}`;
};

export default PhoneInput;
