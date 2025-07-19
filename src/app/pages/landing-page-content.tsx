"use client";

import React from "react";
import HeaderSection from "./section/header";
import AboutSection from "./section/about";
import BenefitsSection from "./section/benefits";
import ModuleSection from "./section/module";
import ContactSection from "./section/footer";
import ReviewSection from "./section/review";
import MembershipSection from "./section/membership";
import { Toaster } from "react-hot-toast";

export default function LandingPageContent() {
  return (
    <main className="px-0 overflow-y-auto scroll-smooth">
      <Toaster position="top-center" />
      <HeaderSection />
      <AboutSection />
      <BenefitsSection />
      <ModuleSection />
      <MembershipSection />
      <ReviewSection />
      <ContactSection />
    </main>
  );
}
