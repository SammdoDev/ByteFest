"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function StrukturDasarHtmlPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Struktur Dasar HTML</h1>

      <p className="text-gray-700 mb-4">
        Dokumen HTML memiliki struktur dasar yang harus diikuti agar halaman bisa dibaca dan ditampilkan dengan benar oleh browser.
        Berikut adalah bagian-bagian penting dari struktur tersebut:
      </p>

      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li><code className="bg-gray-200 px-1 rounded">&lt;!DOCTYPE html&gt;</code> → Menentukan tipe dokumen (HTML5).</li>
        <li><code className="bg-gray-200 px-1 rounded">&lt;html&gt;</code> → Elemen root dari seluruh dokumen.</li>
        <li><code className="bg-gray-200 px-1 rounded">&lt;head&gt;</code> → Berisi metadata seperti <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, dll.</li>
        <li><code className="bg-gray-200 px-1 rounded">&lt;body&gt;</code> → Berisi konten utama yang ditampilkan ke pengguna.</li>
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

      <p className="text-gray-700 mb-4">
        Tag <code>&lt;head&gt;</code> berisi informasi tentang halaman seperti judul, sementara tag <code>&lt;body&gt;</code> memuat semua konten yang bisa dilihat pengguna.
      </p>

      <div className="mt-10 flex justify-between">
        <Link
          href="/dashboard/materi/html/pengenalan"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <FaArrowLeft /> Sebelumnya
        </Link>

        <Link
          href="/dashboard/materi/html/tag-text-heading"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          Selanjutnya <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
