import { Route, Routes } from "react-router-dom";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import Homepage from "./pages/Homepage";
import PremiumPage from "./pages/PremiumPage";
import SafetyPage from "./pages/SafetyPage";
import SupportPage from "./pages/SupportPage";
import AnswerPage from "./pages/AnswerPage";
import AnswersPage from "./pages/AnswersPage";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/delete-account" element={<DeleteAccountPage />} />
      <Route path="/safety" element={<SafetyPage />} />
      <Route path="/premium" element={<PremiumPage />} />
      <Route path="/answers" element={<AnswersPage />} />
      <Route path="/answers/:slug" element={<AnswerPage />} />
    </Routes>
  );
}
