import React from 'react';

interface ToggleProps {
  label: string;
  options: { value: string; label: string }[];
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  options,
  value,
  onChange,
  required = false
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`px-6 py-2 text-sm font-medium transition-colors ${
              value === option.value
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toggle;