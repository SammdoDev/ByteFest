"use client";

import CardMateri from "../../components/CardMateri";

export default function ListTablePage() {
  return (
    <CardMateri
      title="List & Table"
      prevHref="/dashboard/materi/html/link-gambar"
      nextHref="/dashboard/materi/html/form"
    >
      <p className="text-white mb-4">
        HTML menyediakan tag khusus untuk membuat daftar (list) dan tabel (table) guna menyusun data dengan lebih rapi.
      </p>

      {/* LIST */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Daftar (List)</h2>
      <p className="text-white mb-2">Ada dua jenis list di HTML:</p>
      <ul className="list-disc pl-6 text-white mb-2">
        <li><strong>Unordered List</strong>: menggunakan <code>&lt;ul&gt;</code> dan <code>&lt;li&gt;</code></li>
        <li><strong>Ordered List</strong>: menggunakan <code>&lt;ol&gt;</code> dan <code>&lt;li&gt;</code></li>
      </ul>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
        <code>{`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>Login</li>
  <li>Pilih Materi</li>
  <li>Mulai Belajar</li>
</ol>`}</code>
      </pre>

      <p className="text-white">Contoh tampilan:</p>
      <div className="bg-gray-800 p-4 rounded mb-6 text-white">
        <ul className="list-disc pl-6 mb-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ol className="list-decimal pl-6">
          <li>Login</li>
          <li>Pilih Materi</li>
          <li>Mulai Belajar</li>
        </ol>
      </div>

      {/* TABLE */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-2">2. Tabel (Table)</h2>
      <p className="text-white mb-2">
        Untuk menampilkan data dalam bentuk baris dan kolom, gunakan <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>,
        <code>&lt;th&gt;</code>, dan <code>&lt;td&gt;</code>:
      </p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
        <code>{`<table border="1">
  <tr>
    <th>Nama</th>
    <th>Skill</th>
  </tr>
  <tr>
    <td>Ani</td>
    <td>HTML</td>
  </tr>
  <tr>
    <td>Budi</td>
    <td>CSS</td>
  </tr>
</table>`}</code>
      </pre>

      <p className="text-white">Contoh tampilan:</p>
      <div className="bg-gray-800 p-4 border rounded overflow-auto text-black">
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Nama</th>
              <th className="border border-gray-300 px-4 py-2">Skill</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ani</td>
              <td className="border border-gray-300 px-4 py-2">HTML</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Budi</td>
              <td className="border border-gray-300 px-4 py-2">CSS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardMateri>
  );
}
