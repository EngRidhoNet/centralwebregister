import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorRegisterPage from "./pages/vendor/VendorRegisterPage";
import NurseRegisterPage from "./pages/nurse/NurseRegisterPage";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import DoctorRegisterPage from "./pages/doctor/DoctorRegisterPage";
import { REGISTER_URL, DOCTOR_REGISTER_URL, VENDOR_REGISTER_URL, NURSE_REGISTER_URL, HOME_PAGE_URL } from "./constants/constant";

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE_URL} element={<Home />} />
      <Route path={REGISTER_URL} element={<Home />} />
      <Route path={DOCTOR_REGISTER_URL} element={<DoctorRegisterPage />} />
      <Route path={VENDOR_REGISTER_URL} element={<VendorRegisterPage />} />
      <Route path={NURSE_REGISTER_URL} element={<NurseRegisterPage />} />
      <Route path="/registration-success" element={<RegistrationSuccess />} />
    </Routes>
  );
}

export default App;
