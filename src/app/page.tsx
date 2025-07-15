"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Navbar from "./components/landing-page-navbar";
import LandingPageContent from "./components/landing-page-content";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [section, setSection] = useState<"beranda" | "about" | "promo" | "modul">("beranda");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsub();
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar isLoggedIn={isLoggedIn} onChangeSection={setSection} />
      <LandingPageContent />
    </div>
  );
}
