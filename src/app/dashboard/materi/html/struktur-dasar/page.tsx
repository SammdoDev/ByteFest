"use client";

import CardMateri from "../../components/CardMateri";

export default function StrukturDasarHtmlPage() {
  return (
    <CardMateri
      title="Struktur Dasar HTML"
      prevHref="/dashboard/materi/html/pengenalan"
      nextHref="/dashboard/materi/html/tag-text-heading"
    >
      <p className="text-whitemb-4">
        Dokumen HTML memiliki struktur dasar yang harus diikuti agar halaman bisa dibaca dan ditampilkan dengan benar oleh browser.
        Berikut adalah bagian-bagian penting dari struktur tersebut:
      </p>

      <ul className="list-disc pl-6 text-whitemb-6">
        <li><code className="bg-gray-200 px-1 rounded text-black">&lt;!DOCTYPE html&gt;</code> → Menentukan tipe dokumen (HTML5).</li>
        <li><code className="bg-gray-200 px-1 rounded text-black">&lt;html&gt;</code> → Elemen root dari seluruh dokumen.</li>
        <li><code className="bg-gray-200 px-1 rounded text-black">&lt;head&gt;</code> → Berisi metadata seperti <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, dll.</li>
        <li><code className="bg-gray-200 px-1 rounded text-black">&lt;body&gt;</code> → Berisi konten utama yang ditampilkan ke pengguna.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-500 mb-2">Contoh Kode HTML Lengkap</h2>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Judul Halaman</title>
  </head>
  <body>
    <h1>Ini Heading Utama</h1>
    <p>Ini paragraf pertama saya dalam HTML.</p>
  </body>
</html>`}</code>
      </pre>

      <p className="text-whitemb-4">
        Tag <code>&lt;head&gt;</code> berisi informasi tentang halaman seperti judul, sementara tag <code>&lt;body&gt;</code> memuat semua konten yang bisa dilihat pengguna.
      </p>
    </CardMateri>
  );
}
