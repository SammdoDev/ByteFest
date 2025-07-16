"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FormHtmlPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Formulir HTML</h1>

      <p className="text-gray-700 mb-4">
        Formulir (form) digunakan untuk mengumpulkan input dari pengguna. Tag utama adalah <code>&lt;form&gt;</code>,
        dan di dalamnya terdapat berbagai input seperti <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>,
        <code>&lt;select&gt;</code>, dan <code>&lt;button&gt;</code>.
      </p>

      <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Contoh Struktur Form</h2>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
        <code>{`<form action="/submit" method="post">
  <label for="nama">Nama:</label>
  <input type="text" id="nama" name="nama" />

  <label for="pesan">Pesan:</label>
  <textarea id="pesan" name="pesan"></textarea>

  <label for="topik">Topik:</label>
  <select id="topik" name="topik">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </select>

  <button type="submit">Kirim</button>
</form>`}</code>
      </pre>

      <h3 className="font-semibold text-gray-800 mt-4 mb-2">Contoh tampilan:</h3>
      <div className="bg-gray-50 p-4 border rounded space-y-4">
        <form className="space-y-3">
          <div>
            <label htmlFor="nama" className="block font-medium text-gray-700">
              Nama:
            </label>
            <input
              type="text"
              id="nama"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="Masukkan nama"
            />
          </div>

          <div>
            <label htmlFor="pesan" className="block font-medium text-gray-700">
              Pesan:
            </label>
            <textarea
              id="pesan"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="Masukkan pesan"
            ></textarea>
          </div>

          <div>
            <label htmlFor="topik" className="block font-medium text-gray-700">
              Pilih Topik:
            </label>
            <select
              id="topik"
              className="w-full border border-gray-300 px-3 py-2 rounded"
            >
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="js">JavaScript</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
          >
            Kirim
          </button>
        </form>
      </div>

      <div className="mt-10 flex justify-between">
        <Link
          href="/dashboard/materi/html/list-table"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <FaArrowLeft /> Sebelumnya
        </Link>

        <Link
          href="/dashboard/kuis/html"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          Lanjut Kuis? <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
