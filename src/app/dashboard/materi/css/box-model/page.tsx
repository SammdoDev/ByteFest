"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BoxModelPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Box Model</h1>

      <p className="text-gray-700 text-base mb-4">
        Setiap elemen HTML dianggap sebagai sebuah kotak dalam CSS. Konsep ini disebut dengan <strong>Box Model</strong>, yang terdiri dari:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><strong>Content</strong>: Isi elemen, seperti teks atau gambar</li>
        <li><strong>Padding</strong>: Ruang di sekitar konten</li>
        <li><strong>Border</strong>: Garis di sekitar padding (dan konten)</li>
        <li><strong>Margin</strong>: Ruang di luar border</li>
      </ul>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
{`div {
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}`}
      </pre>

      <p className="text-gray-700 mb-4">
        Properti di atas akan memberikan ruang margin luar 20px, padding dalam 10px, dan border 2px pada elemen <code className="bg-gray-200 px-1 rounded">div</code>.
      </p>

      <div className="flex justify-between mt-10">
        <Link href="/dashboard/materi/css/properti-dasar" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
          <FaArrowLeft /> Sebelumnya
        </Link>
        <Link href="/dashboard/materi/css/flexbox" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
          Selanjutnya <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
