"use client";

import CardMateri from "../../components/CardMateri";

export default function LinkGambarPage() {
  return (
    <CardMateri
      title="Link & Gambar"
      prevHref="/dashboard/materi/html/tag-text-heading"
      nextHref="/dashboard/materi/html/list-table"
    >
      <p className="text-white mb-4">
        Dalam HTML, kita bisa menambahkan link ke halaman lain menggunakan tag{" "}
        <code>&lt;a&gt;</code>, dan menampilkan gambar menggunakan tag{" "}
        <code>&lt;img&gt;</code>.
      </p>

      {/* LINK */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-2">
        1. Menambahkan Link
      </h2>
      <p className="text-white mb-2">
        Gunakan tag <code>&lt;a&gt;</code> dengan atribut <code>href</code>{" "}
        untuk menautkan ke URL lain:
      </p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
        <code>{`<a href="https://www.google.com">Kunjungi Google</a>`}</code>
      </pre>

      <p className="text-white">Contoh tampilan:</p>
      <div className="bg-gray-800 p-4 border rounded mb-6">
        <a
          href="https://www.google.com"
          target="_blank"
          className="text-blue-600 underline"
        >
          Kunjungi Google
        </a>
      </div>

      {/* GAMBAR */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-2">
        2. Menampilkan Gambar
      </h2>
      <p className="text-white mb-2">
        Gunakan tag <code>&lt;img&gt;</code> dengan atribut <code>src</code>{" "}
        untuk menentukan sumber gambar, dan <code>alt</code> untuk teks
        alternatif jika gambar tidak tampil:
      </p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
        <code>{`<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Logo HTML5" />`}</code>
      </pre>

      <p className="text-white">Contoh tampilan:</p>
      <div className="bg-gray-800 p-4 border rounded text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="Logo HTML5"
          className="mx-auto h-32 mt-2"
        />
        <p className="text-sm text-gray-100 mt-2">
          Logo resmi HTML5 dari Wikipedia
        </p>
      </div>
    </CardMateri>
  );
}
