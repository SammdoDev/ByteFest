"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Navbar from "./components/landing-page-navbar";
import LandingPageContent from "./pages/landing-page-content";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [section, setSection] = useState<
    "beranda" | "about" | "promo" | "modul"
  >("beranda");
  const [showLanding, setShowLanding] = useState(false);
  const [progress, setProgress] = useState(0);

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const progressValue = { value: 0 };
    const tl = gsap.timeline();

    tl.to(layer1Ref.current, { opacity: 1, duration: 0.2 });
    tl.to(progressValue, {
      value: 100,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.floor(progressValue.value));
      },
    });
    tl.to(layer1Ref.current, { opacity: 0, duration: 0.3 });

    tl.to(layer2Ref.current, { opacity: 1, duration: 0.8 });
    tl.to(layer2Ref.current, { opacity: 0, duration: 0.5, delay: 1 });

    tl.to(layer3Ref.current, { opacity: 1, duration: 1 });
    tl.to(layer3Ref.current, {
      opacity: 0,
      duration: 0.5,
      delay: 1,
      onComplete: () => setShowLanding(true),
    });
  }, []);

  return (
    <>
      {!showLanding && (
        <div
          ref={layer1Ref}
          className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center opacity-0 z-50"
        >
          <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden mb-4 relative">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-stripes"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-lg font-semibold">{progress}%</div>
        </div>
      )}

      {!showLanding && (
        <div
          ref={layer2Ref}
          className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center opacity-0 z-40 text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight">SammdoDev</h1>
          <p className="text-sm ">proudly present...</p>
        </div>
      )}

      {!showLanding && (
        <div
          ref={layer3Ref}
          className="fixed inset-0 bg-black text-white flex items-center justify-center opacity-0 z-30"
        >
          <div className="w-28 h-28 relative">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
        </div>
      )}

      {showLanding && (
        <div className="scroll-smooth">
          <Navbar isLoggedIn={isLoggedIn} onChangeSection={setSection} />
          <LandingPageContent />
        </div>
      )}
    </>
  );
}
