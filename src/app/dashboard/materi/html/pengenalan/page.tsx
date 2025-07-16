"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PengenalanHtmlPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Pengenalan HTML</h1>

      <p className="text-gray-700 text-base mb-4">
        HTML (HyperText Markup Language) adalah bahasa standar untuk membuat dan
        menyusun halaman web. HTML menggunakan tag-tag tertentu untuk menentukan
        struktur dan isi dari halaman, seperti teks, gambar, video, dan link.
      </p>

      <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-blue-500 mb-6">
        <p className="text-sm text-gray-800">
          📌 HTML bukan bahasa pemrograman, melainkan bahasa markup yang
          digunakan untuk memberi struktur pada dokumen web.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-500 mb-2">
        Contoh Struktur Dasar HTML
      </h2>
      <p className="text-gray-700 mb-2">
        Berikut adalah contoh sederhana dari struktur dokumen HTML:
      </p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Halaman Pertama Saya</title>
  </head>
  <body>
    <h1>Selamat Datang!</h1>
    <p>Ini adalah paragraf pertama saya.</p>
  </body>
</html>`}</code>
      </pre>

      <p className="text-gray-700 mb-4">
        Struktur di atas terdiri dari tag{" "}
        <code className="bg-gray-200 px-1 rounded">html</code> sebagai elemen
        utama,
        <code className="bg-gray-200 px-1 rounded">head</code> untuk informasi
        halaman, dan
        <code className="bg-gray-200 px-1 rounded">body</code> untuk konten yang
        ditampilkan.
      </p>

      <div className="flex justify-between mt-10">
        <Link
          href="/dashboard/materi/html"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <FaArrowLeft /> Kembali
        </Link>

        <Link
          href="/dashboard/materi/html/struktur-dasar"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          Selanjutnya
          <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
