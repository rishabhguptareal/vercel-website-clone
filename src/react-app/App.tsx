import React from "react";
import "../app/globals.css";

import Navbar from "./Navbar.react";
import AnnouncementBanner from "@/components/sections/announcement-banner";
import HeroSection from "@/components/sections/hero-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import GitDeploysSection from "@/components/sections/git-deploys-section";
import CollaborationSection from "@/components/sections/collaboration-section";
import ObservabilitySection from "@/components/sections/observability-section";
import AIGatewaySection from "@/components/sections/ai-gateway-section";
import RollbacksSection from "@/components/sections/rollbacks-section";
import InfrastructureSection from "@/components/sections/infrastructure-section";
import ComputeSecuritySection from "@/components/sections/compute-security-section";
import TemplatesSection from "@/components/sections/templates-section";
import CtaSection from "@/components/sections/cta-section";
import FooterSection from "@/components/sections/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <AnnouncementBanner />
        <HeroSection />
        <TestimonialsSection />
        <div className="bg-white py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-16 xl:gap-24">
              <GitDeploysSection />
              <CollaborationSection />
            </div>
          </div>
        </div>
        <ObservabilitySection />
        <AIGatewaySection />
        <RollbacksSection />
        <InfrastructureSection />
        <ComputeSecuritySection />
        <TemplatesSection />
        <CtaSection />
        <FooterSection />
      </main>
    </div>
  );
}