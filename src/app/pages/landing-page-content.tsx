"use client";

import React from "react";
import HeaderSection from "./section/header";
import AboutSection from "./section/about";
import PromoSection from "./section/promo";
import ModuleSection from "./section/module";
import ContactSection from "./section/contact";

export default function LandingPageContent() {
  return (
    <main className="px-0 overflow-y-auto scroll-smooth">
      <HeaderSection />
      <AboutSection />
      <PromoSection />
      <ModuleSection />
      <ContactSection />
    </main>
  );
}
