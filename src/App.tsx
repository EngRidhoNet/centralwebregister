import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorRegisterPage from "./pages/vendor/VendorRegisterPage";
import NurseRegisterPage from "./pages/nurse/NurseRegisterPage";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import DoctorRegisterPage from "./pages/doctor/DoctorRegisterPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<CustomerRegisterPage />} />
      <Route path="/doctor/register" element={<DoctorRegisterPage />} />
      <Route path="/vendor/register" element={<VendorRegisterPage />} />
      <Route path="/nurse/register" element={<NurseRegisterPage />} />
      <Route path="/registration-success" element={<RegistrationSuccess />} />
    </Routes>
  );
}

export default App;
