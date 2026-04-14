import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SupportPage from "./pages/SupportPage";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import SafetyPage from "./pages/SafetyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/safety" element={<SafetyPage />} />
      </Routes>
    </BrowserRouter>
  );
}