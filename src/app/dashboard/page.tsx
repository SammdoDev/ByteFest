"use client";

import { useEffect, useState } from "react";
import HomeContent from "./components/dashboard-content";

export default function DashboardPage() {
  const [user, setUser] = useState("");
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    const storedLevel = localStorage.getItem("level");

    if (storedUser) setUser(storedUser);
    if (storedLevel) setLevel(parseInt(storedLevel));
  }, []);

  return <HomeContent user={user} level={level} />;
}
