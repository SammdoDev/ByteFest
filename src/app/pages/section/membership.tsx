"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const plans = [
  {
    name: "Free",
    price: 0,
    features: ["✅ Akses modul dasar", "✅ Forum terbatas", "❌ Iklan tampil"],
    buttonText: "Gunakan",
  },
  {
    name: "Premium",
    price: 49000,
    features: [
      "✅ Semua fitur Free",
      "✅ Akses semua kuis & materi",
      "✅ Tanpa iklan",
    ],
    buttonText: "Upgrade",
  },
  {
    name: "Pro",
    price: 99000,
    features: [
      "✅ Semua fitur Premium",
      "✅ Sertifikat digital",
      "✅ Support langsung via Discord",
    ],
    buttonText: "Upgrade",
  },
];

export default function MembershipPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState("User");
  const [currentMembership, setCurrentMembership] = useState("Free");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setCurrentMembership(data.currentMembership || "Free");
          setUserName(data.name || "User");
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const updateMembership = async (planName: string) => {
    if (!userId) return toast.error("Silakan login terlebih dahulu.");
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { currentMembership: planName });
      setCurrentMembership(planName);
      toast.success(`Membership berhasil diubah menjadi ${planName}`);
    } catch (error) {
      console.error("Gagal update membership:", error);
      toast.error("Gagal upgrade membership.");
    }
  };

  return (
    <main
      id="membership"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50 to-white text-gray-800"
    >
      <Toaster />
      <h1 className="text-4xl font-bold text-center text-black mb-4">
        Pilih Membership
      </h1>

      <p className="text-center mb-10 text-lg text-gray-600">
        Status Saat Ini:
        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold ml-2">
          {currentMembership}
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => {
          const isActive = currentMembership === plan.name;

          return (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border transition shadow-lg hover:shadow-xl ${
                isActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-2 flex justify-between items-center">
                {plan.name}
                {isActive && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
                    Aktif
                  </span>
                )}
              </h2>

              <p className="text-xl font-semibold text-gray-700 mb-4">
                Rp {plan.price.toLocaleString("id-ID")}
              </p>

              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {!isActive && (
                <button
                  onClick={() => updateMembership(plan.name)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-semibold transition"
                >
                  {plan.buttonText} ke {plan.name}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
