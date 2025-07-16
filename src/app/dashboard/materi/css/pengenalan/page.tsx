"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PengenalanCSSPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Pengenalan CSS</h1>

      <p className="text-gray-700 mb-4">
        CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur
        tampilan dan gaya elemen HTML di halaman web. Dengan CSS, kamu dapat
        mengubah warna, ukuran, layout, dan animasi dari elemen-elemen web.
      </p>

      <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-blue-500 mb-6">
        <p className="text-sm text-gray-800">
          🎨 CSS memungkinkan pemisahan antara struktur (HTML) dan tampilan, sehingga kode lebih bersih dan mudah dikelola.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-500 mb-2">Contoh Penggunaan CSS</h2>
      <p className="text-gray-700 mb-2">Berikut adalah contoh sederhana penggunaan CSS secara internal:</p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<style>
  body {
    background-color: lightblue;
  }
  h1 {
    color: navy;
    margin-left: 20px;
  }
</style>`}</code>
      </pre>

      <p className="text-gray-700 mb-4">
        Dengan CSS di atas, latar belakang halaman akan menjadi biru muda dan judul
        akan berwarna biru tua serta memiliki margin kiri. Kita akan membahas cara
        lain menyisipkan CSS pada halaman seSelanjutnyanya.
      </p>

      <div className="flex justify-between mt-10">
        <Link
          href="/dashboard/materi/css"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <FaArrowLeft /> Kembali
        </Link>

        <Link
          href="/dashboard/materi/css/cara-menyisipkan"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          Selanjutnya<FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
