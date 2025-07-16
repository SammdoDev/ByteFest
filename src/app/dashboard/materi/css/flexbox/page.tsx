"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FlexboxPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Flexbox</h1>

      <p className="text-gray-700 text-base mb-4">
        Flexbox (Flexible Box) adalah metode layout di CSS yang digunakan untuk menyusun elemen dalam satu dimensi (baris atau kolom).
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">Contoh Dasar</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
{`div.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
      </pre>

      <p className="text-gray-700 mb-4">
        <code className="bg-gray-200 px-1 rounded">display: flex</code> mengaktifkan flexbox. Lalu:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><strong>justify-content</strong>: mengatur posisi horizontal</li>
        <li><strong>align-items</strong>: mengatur posisi vertikal</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">Contoh HTML</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
      </pre>

      <div className="flex justify-between mt-10">
        <Link href="/dashboard/materi/css/box-model" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
          <FaArrowLeft /> Sebelumnya
        </Link>
        <Link href="/dashboard/materi/css/grid" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
          Lanjut Kuis? <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
