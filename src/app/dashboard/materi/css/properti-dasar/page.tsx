"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PropertiDasarCSSPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Properti Dasar CSS
      </h1>

      <p className="text-gray-700 text-base mb-4">
        Dalam CSS, properti digunakan untuk mengatur tampilan elemen HTML. Berikut ini adalah beberapa properti dasar yang umum digunakan:
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">1. color</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-2">
{`p {
  color: red;
}`}
      </pre>
      <p className="text-gray-700 mb-4">Mengubah warna teks pada elemen paragraf menjadi merah.</p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">2. font-size</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-2">
{`h1 {
  font-size: 32px;
}`}
      </pre>
      <p className="text-gray-700 mb-4">Mengatur ukuran huruf pada elemen heading menjadi 32 piksel.</p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">3. margin</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-2">
{`div {
  margin: 20px;
}`}
      </pre>
      <p className="text-gray-700 mb-4">Menambahkan jarak luar (luar border) sebesar 20 piksel pada semua sisi elemen.</p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">4. padding</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-2">
{`div {
  padding: 10px;
}`}
      </pre>
      <p className="text-gray-700 mb-4">Menambahkan jarak dalam (antara border dan konten) sebesar 10 piksel.</p>

      <div className="flex justify-between mt-10">
        <Link
          href="/dashboard/materi/css/selektor"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <FaArrowLeft /> Sebelumnya
        </Link>

        <Link
          href="/dashboard/materi/css/box-model"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          Selanjutnya <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
