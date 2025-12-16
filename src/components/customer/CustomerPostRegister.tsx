import React, { useState } from "react";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";
import FileUpload from "../common/FileUpload";
import Toggle from "../common/Toggle";
import type { CustomerPostRegisterForm, DropdownOption } from "../../types";

interface CustomerPostRegisterProps {
  onSubmit: (data: CustomerPostRegisterForm) => void;
  initialData: {
    fullName: string;
    email: string;
    phone: string;
  };
}

const CustomerPostRegister: React.FC<CustomerPostRegisterProps> = ({ onSubmit, initialData }) => {
  // 1. Inisialisasi State (Hanya data personal & alamat)
  const [formData, setFormData] = useState<CustomerPostRegisterForm>({
    // Personal
    fullName: initialData.fullName,
    dob: "",
    gender: "male",
    idType: "nric",

    nationality: "MY",
    profilePhoto: null,
    idPhoto: null,

    // Contact
    phoneNumber: initialData.phone,
    emailAddress: initialData.email,
    address: "",
    postcode: "",
    state: "",
    city: "",
  });

  const [cities, setCities] = useState<DropdownOption[]>([]);

  // 2. Data Dropdown
  const nationalityOptions: DropdownOption[] = [
    { value: "MY", label: "Malaysian" },
    { value: "SG", label: "Singaporean" },
    { value: "ID", label: "Indonesian" },
    { value: "OTHERS", label: "Others" },
  ];

  const stateOptions: DropdownOption[] = [
    { value: "Johor", label: "Johor" },
    { value: "Kedah", label: "Kedah" },
    { value: "Kelantan", label: "Kelantan" },
    { value: "Kuala Lumpur", label: "Kuala Lumpur" },
    { value: "Selangor", label: "Selangor" },
    { value: "Penang", label: "Penang" },
    { value: "Sabah", label: "Sabah" },
    { value: "Sarawak", label: "Sarawak" },
  ];

  // Mock cities based on state
  const citiesByState: Record<string, DropdownOption[]> = {
    "Kuala Lumpur": [
      { value: "Bukit Bintang", label: "Bukit Bintang" },
      { value: "Cheras", label: "Cheras" },
      { value: "Bangsar", label: "Bangsar" },
    ],
    Selangor: [
      { value: "Petaling Jaya", label: "Petaling Jaya" },
      { value: "Shah Alam", label: "Shah Alam" },
      { value: "Subang Jaya", label: "Subang Jaya" },
    ],
  };

  // Handler Functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "state") {
      setCities(citiesByState[value] || []);
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  };

  const handleFileChange = (name: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const handleToggleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tidak perlu validasi MMC/APC untuk customer
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Complete Your Profile</h2>
          <p className="text-gray-600 mb-8">Please provide your details to finish registration</p>

          <form onSubmit={handleSubmit}>
            {/* --- 1. Personal Info Section --- */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Personal Information</h3>

              <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required disabled />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} required />

                <Toggle
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(value) => handleToggleChange("gender", value)}
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Toggle
                  label="ID Type"
                  name="idType"
                  value={formData.idType}
                  onChange={(value) => handleToggleChange("idType", value)}
                  options={[
                    { value: "nric", label: "NRIC" },
                    { value: "passport", label: "Passport" },
                  ]}
                  required
                />

                {/* <InputField
                  label={formData.idType === "nric" ? "NRIC Number" : "Passport Number"}
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  placeholder={`Enter ${formData.idType === "nric" ? "NRIC" : "Passport"} number`}
                  required
                /> */}
              </div>

              <div className="mt-4">
                <Dropdown label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} options={nationalityOptions} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <FileUpload label="Profile Photo" name="profilePhoto" onChange={(file) => handleFileChange("profilePhoto", file)} accept="image/*" required />
                <FileUpload label="ID Document (Front)" name="idPhoto" onChange={(file) => handleFileChange("idPhoto", file)} accept="image/*" required />
              </div>
            </div>

            {/* --- 2. Contact & Address Section --- */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Contact & Address</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required disabled />
                <InputField label="Email Address" type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required disabled />
              </div>

              <InputField
                label="Residential Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <InputField label="Postcode" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Enter postcode" required />
                <Dropdown label="State" name="state" value={formData.state} onChange={handleChange} options={stateOptions} required />
              </div>

              <div className="mt-4">
                <Dropdown label="City" name="city" value={formData.city} onChange={handleChange} options={cities} required disabled={!formData.state} />
              </div>
            </div>

            {/* Tombol Submit dengan warna Hijau (Green) untuk Customer */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
            >
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerPostRegister;
