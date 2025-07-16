"use client";

import CardMateri from "../../components/CardMateri";

export default function PengenalanHtmlPage() {
  return (
    <CardMateri
      title="Pengenalan HTML"
      prevHref="/dashboard/materi/html"
      nextHref="/dashboard/materi/html/struktur-dasar"
    >
      <p className="text-whitetext-base mb-4">
        HTML (HyperText Markup Language) adalah bahasa standar untuk membuat dan
        menyusun halaman web. HTML menggunakan tag-tag tertentu untuk menentukan
        struktur dan isi dari halaman, seperti teks, gambar, video, dan link.
      </p>

      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <p className="text-sm text-white">
           HTML bukan bahasa pemrograman, melainkan bahasa markup yang
          digunakan untuk memberi struktur pada dokumen web.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-500 mb-2">
        Contoh Struktur Dasar HTML
      </h2>
      <p className="text-whitemb-2">
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

      <p className="text-white mb-4">
        Struktur di atas terdiri dari tag{" "}
        <code className="bg-gray-200 px-1 rounded text-black">html</code> sebagai elemen
        utama,{" "}
        <code className="bg-gray-200 px-1 rounded text-black">head</code> untuk informasi
        halaman, dan{" "}
        <code className="bg-gray-200 px-1 rounded text-black">body</code> untuk konten yang
        ditampilkan.
      </p>
    </CardMateri>
  );
}
