import React, { useState } from 'react';
import InputField from '../common/InputField';
import Dropdown from '../common/Dropdown';
import FileUpload from '../common/FileUpload';
import Toggle from '../common/Toggle';
import type { VendorPostRegisterForm, DropdownOption } from '../../types';

interface VendorPostRegisterProps {
  onSubmit: (data: VendorPostRegisterForm) => void;
  initialData: {
    vendorName: string;
    email: string;
    phone: string;
  };
}

const VendorPostRegister: React.FC<VendorPostRegisterProps> = ({
  onSubmit,
  initialData
}) => {
  const [formData, setFormData] = useState<VendorPostRegisterForm>({
    fullName: initialData.vendorName,
    dob: '',
    gender: 'male',
    idType: 'nric',
    idNumber: '',
    nationality: '',
    profilePhoto: null,
    idPhoto: null,
    phoneNumber: initialData.phone,
    emailAddress: initialData.email,
    address: '',
    postcode: '',
    state: '',
    city: '',
    lat: '',
    long: ''
  });

  const [cities, setCities] = useState<DropdownOption[]>([]);

  // Mock data - replace with actual data
  const nationalityOptions: DropdownOption[] = [
    { value: 'MY', label: 'Malaysian' },
    { value: 'SG', label: 'Singaporean' },
    { value: 'ID', label: 'Indonesian' },
    { value: 'TH', label: 'Thai' }
  ];

  const stateOptions: DropdownOption[] = [
    { value: 'Johor', label: 'Johor' },
    { value: 'Kedah', label: 'Kedah' },
    { value: 'Kelantan', label: 'Kelantan' },
    { value: 'Kuala Lumpur', label: 'Kuala Lumpur' },
    { value: 'Melaka', label: 'Melaka' },
    { value: 'Negeri Sembilan', label: 'Negeri Sembilan' },
    { value: 'Pahang', label: 'Pahang' },
    { value: 'Penang', label: 'Penang' },
    { value: 'Perak', label: 'Perak' },
    { value: 'Perlis', label: 'Perlis' },
    { value: 'Sabah', label: 'Sabah' },
    { value: 'Sarawak', label: 'Sarawak' },
    { value: 'Selangor', label: 'Selangor' },
    { value: 'Terengganu', label: 'Terengganu' }
  ];

  // Mock cities based on state - replace with actual API call
  const citiesByState: Record<string, DropdownOption[]> = {
    'Kuala Lumpur': [
      { value: 'Bukit Bintang', label: 'Bukit Bintang' },
      { value: 'Cheras', label: 'Cheras' },
      { value: 'Bangsar', label: 'Bangsar' }
    ],
    'Selangor': [
      { value: 'Petaling Jaya', label: 'Petaling Jaya' },
      { value: 'Shah Alam', label: 'Shah Alam' },
      { value: 'Subang Jaya', label: 'Subang Jaya' }
    ]
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Update cities when state changes
    if (name === 'state') {
      setCities(citiesByState[value] || []);
      setFormData(prev => ({ ...prev, city: '' }));
    }
  };

  const handleFileChange = (name: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [name]: file }));
  };

  const handleToggleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Complete Your Profile</h2>
          <p className="text-gray-600 mb-8">Please provide additional information</p>

          <form onSubmit={handleSubmit}>
            {/* Owner Personal Info Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Owner Personal Information
              </h3>
              
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />

                <Toggle
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(value) => handleToggleChange('gender', value)}
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' }
                  ]}
                  required
                />
              </div>

              <Toggle
                label="ID Type"
                name="idType"
                value={formData.idType}
                onChange={(value) => handleToggleChange('idType', value)}
                options={[
                  { value: 'nric', label: 'NRIC' },
                  { value: 'passport', label: 'Passport' }
                ]}
                required
              />

              <InputField
                label={formData.idType === 'nric' ? 'NRIC Number' : 'Passport Number'}
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                placeholder={`Enter ${formData.idType === 'nric' ? 'NRIC' : 'Passport'} number`}
                required
              />

              <Dropdown
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                options={nationalityOptions}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUpload
                  label="Profile Photo"
                  name="profilePhoto"
                  onChange={(file) => handleFileChange('profilePhoto', file)}
                  accept="image/*"
                  required
                />

                <FileUpload
                  label="ID Photo"
                  name="idPhoto"
                  onChange={(file) => handleFileChange('idPhoto', file)}
                  accept="image/*"
                  required
                />
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  disabled
                />

                <InputField
                  label="Email Address"
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  disabled
                />
              </div>
            </div>

            {/* Vendor Address Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Vendor Address
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Note: This is your business address, not the order delivery address
              </p>

              <InputField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="Enter postcode"
                  required
                />

                <Dropdown
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  options={stateOptions}
                  required
                />
              </div>

              <Dropdown
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                options={cities}
                required
                disabled={!formData.state}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Latitude"
                  name="lat"
                  value={formData.lat}
                  onChange={handleChange}
                  placeholder="e.g., 3.1390"
                  required
                />

                <InputField
                  label="Longitude"
                  name="long"
                  value={formData.long}
                  onChange={handleChange}
                  placeholder="e.g., 101.6869"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorPostRegister;