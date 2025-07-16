'use client';

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SelektorCSSPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Selektor CSS</h1>

      <p className="text-gray-700 text-base mb-4">
        Selektor CSS digunakan untuk memilih elemen HTML yang ingin kamu styling. Berikut adalah tipe selektor yang umum digunakan:
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">1. Selektor Tag</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
{`h1 {
  color: red;
}`}
      </pre>
      <p className="text-gray-700 mb-4">Memilih semua elemen <code className="bg-gray-200 px-1 rounded">h1</code> dan mengubah warnanya menjadi merah.</p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">2. Selektor Class</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
{`.judul {
  font-weight: bold;
}`}
      </pre>
      <p className="text-gray-700 mb-4">Memilih semua elemen dengan class <code className="bg-gray-200 px-1 rounded">judul</code>.</p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">3. Selektor ID</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
{`#header {
  background-color: yellow;
}`}
      </pre>
      <p className="text-gray-700 mb-4">Memilih elemen dengan id <code className="bg-gray-200 px-1 rounded">header</code>.</p>

      <div className="flex justify-between mt-10">
        <Link href="/dashboard/materi/css/cara-menyisipkan" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
          <FaArrowLeft /> Sebelumnya
        </Link>
        <Link href="/dashboard/materi/css/properti-dasar" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
          Selanjutnya <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
