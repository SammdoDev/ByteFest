"use client";
import { ReactNode } from "react";

export default function QuizLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">{title}</h1>
      {children}
    </main>
  );
}
