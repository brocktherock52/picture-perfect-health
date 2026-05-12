import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadCaptureModal } from "@/components/shared/LeadCaptureModal";
import { JsonLd } from "@/components/shared/JsonLd";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { GrainOverlay } from "@/components/shared/GrainOverlay";
import { StickyScrollCTA } from "@/components/shared/StickyScrollCTA";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { LoadingReveal } from "@/components/shared/LoadingReveal";
import { organizationSchema, personSchema, faqSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faq";

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
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Site-wide JSON-LD: Organization / LocalBusiness / MedicalBusiness */}
      <JsonLd data={organizationSchema()} />
      <JsonLd data={personSchema()} />
      <JsonLd data={faqSchema(generalFaqs)} />

      <LenisProvider />
      <LoadingReveal />
      <CustomCursor />
      <ScrollProgress />
      <GrainOverlay />

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

      {/* Sticky "Get a wellness audit" pill that surfaces below the fold */}
      <StickyScrollCTA />

      {/* Scroll-triggered lead capture modal */}
      <LeadCaptureModal />

      {/* Sonner toaster for form success/error notifications */}
      <Toaster position="top-right" richColors closeButton />

      {/* Vercel privacy-respecting analytics */}
      <Analytics />
    </div>
  );
}

export default App;
