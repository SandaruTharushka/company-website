import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import HomePage from "./pages/HomePage";
import DownloadPage from "./pages/DownloadPage";
import PosPage from "./pages/PosPage";
import FeaturesPage from "./pages/FeaturesPage";
import ScreenshotsPage from "./pages/ScreenshotsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { COMPANY } from "./config";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function PageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": `${COMPANY.name} — ${COMPANY.tagline}`,
      "/download": `Download Barcode Manager — ${COMPANY.name}`,
      "/pos": `AutoServ POS — 7-Day Free Trial | ${COMPANY.name}`,
      "/features": `Features — ${COMPANY.name}`,
      "/screenshots": `Screenshots — ${COMPANY.name}`,
      "/contact": `Contact — ${COMPANY.name}`,
      "/privacy": `Privacy Policy — ${COMPANY.name}`,
      "/terms": `Terms of Service — ${COMPANY.name}`,
    };
    document.title = titles[pathname] || `${COMPANY.name}`;
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <PageMeta />
      <MouseGlow />
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/pos" element={<PosPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/screenshots" element={<ScreenshotsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
