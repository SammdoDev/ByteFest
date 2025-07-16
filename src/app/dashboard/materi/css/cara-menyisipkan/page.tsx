"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CaraMenyisipkanCSSPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Cara Menyisipkan CSS</h1>

      <p className="text-gray-700 text-base mb-4">
        Ada tiga cara utama untuk menyisipkan CSS ke dalam dokumen HTML:
        <strong> inline</strong>, <strong>internal</strong>, dan <strong>eksternal</strong>.
        Masing-masing memiliki kelebihan dan kekurangannya tergantung pada kebutuhan proyek.
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">1. CSS Inline</h2>
      <p className="text-gray-700 mb-2">CSS ditulis langsung pada atribut style di tag HTML.</p>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<p style="color: red; font-size: 18px;">Ini paragraf dengan CSS inline</p>`}</code>
      </pre>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">2. CSS Internal</h2>
      <p className="text-gray-700 mb-2">CSS ditulis di dalam tag &lt;style&gt; di bagian &lt;head&gt; dokumen HTML.</p>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<head>
  <style>
    p {
      color: green;
      font-weight: bold;
    }
  </style>
</head>`}</code>
      </pre>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">3. CSS Eksternal</h2>
      <p className="text-gray-700 mb-2">CSS ditulis di file terpisah (.css) dan disambungkan dengan tag &lt;link&gt;.</p>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<head>
  <link rel="stylesheet" href="style.css">
</head>`}</code>
      </pre>

      <div className="flex justify-between mt-10">
        <Link
          href="/dashboard/materi/css/pengenalan"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <FaArrowLeft /> Sebelumnya
        </Link>

        <Link
          href="/dashboard/materi/css/selektor"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          Selanjutnya <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
