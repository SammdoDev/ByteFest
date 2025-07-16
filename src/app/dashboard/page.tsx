"use client";

import { useEffect, useState } from "react";
import HomeContent from "./components/dashboard-content";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function DashboardPage() {
  const [user, setUser] = useState("");
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setUser(data.username || data.name || data.displayName || "Guest");
          setLevel(data.level ?? 1);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return <HomeContent user={user} level={level} />;
}
