import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadCaptureModal } from "@/components/shared/LeadCaptureModal";
import { JsonLd } from "@/components/shared/JsonLd";
import { organizationSchema } from "@/lib/schema";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import PortfolioPage from "@/pages/PortfolioPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import MembershipPage from "@/pages/MembershipPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Site-wide JSON-LD: Organization / ProfessionalService */}
      <JsonLd data={organizationSchema()} />

      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Scroll-triggered lead capture modal */}
      <LeadCaptureModal />

      {/* Sonner toaster for form success/error notifications */}
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}

export default App;
