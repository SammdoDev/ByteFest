// components/CardMateri.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type CardMateriProps = {
  title: string;
  children: React.ReactNode;
  prevHref?: string;
  nextHref?: string;
  prevLabel?: string;
  nextLabel?: string;
};

export default function CardMateri({
  title,
  children,
  prevHref,
  nextHref,
  prevLabel = "Sebelumnya",
  nextLabel = "Selanjutnya",
}: CardMateriProps) {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{title}</h1>
      {children}

      <div className="flex justify-between mt-10">
        {prevHref ? (
          <Link
            href={prevHref}
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
          >
            <FaArrowLeft /> {prevLabel}
          </Link>
        ) : <div />}

        {nextHref ? (
          <Link
            href={nextHref}
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
          >
            {nextLabel} <FaArrowRight />
          </Link>
        ) : <div />}
      </div>
    </main>
  );
}
