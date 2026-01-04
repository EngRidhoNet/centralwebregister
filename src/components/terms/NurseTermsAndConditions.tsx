const NurseTermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow px-6 py-4">
        <h1 className="text-lg font-semibold">Terms & Conditions</h1>
      </div>

      <div className="p-4 h-[calc(100vh-80px)]">
        <iframe src="/MediCare MyNurse App User Agreement.pdf#toolbar=0" className="w-full h-full" title="Terms" />
      </div>
    </div>
  );
};

export default NurseTermsAndConditions;
