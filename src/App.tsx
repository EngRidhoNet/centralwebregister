import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import VendorRegisterPage from "./pages/vendor/VendorRegisterPage";
import NurseRegisterPage from "./pages/nurse/NurseRegisterPage";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import DoctorRegisterPage from "./pages/doctor/DoctorRegisterPage";
import {
  REGISTER_URL,
  DOCTOR_REGISTER_URL,
  VENDOR_REGISTER_URL,
  NURSE_REGISTER_URL,
  HOME_PAGE_URL,
  DOCTOR_TERMS_AND_CONDITIONS_URL,
  NURSE_TERMS_AND_CONDITIONS_URL,
  VENDOR_TERMS_AND_CONDITIONS_URL,
} from "./constants/constant";
import Home from "./pages/Home";

import DoctorTermsAndConditions from "./components/terms/DoctorTermsAndConditions";
import NurseTermsAndConditions from "./components/terms/NurseTermsAndConditions";
import VendorTermsAndConditions from "./components/terms/VendorTermsAndConditions";
import { ToastProvider } from "./components/common/ToastContainer";

function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path={HOME_PAGE_URL} element={<Home />} />
        <Route path={REGISTER_URL} element={<Register />} />
        <Route path={DOCTOR_REGISTER_URL} element={<DoctorRegisterPage />} />
        <Route path={VENDOR_REGISTER_URL} element={<VendorRegisterPage />} />
        <Route path={NURSE_REGISTER_URL} element={<NurseRegisterPage />} />

        <Route path={DOCTOR_TERMS_AND_CONDITIONS_URL} element={<DoctorTermsAndConditions />} />
        <Route path={NURSE_TERMS_AND_CONDITIONS_URL} element={<NurseTermsAndConditions />} />
        <Route path={VENDOR_TERMS_AND_CONDITIONS_URL} element={<VendorTermsAndConditions />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
      </Routes>
    </ToastProvider>
  );
}

export default App;