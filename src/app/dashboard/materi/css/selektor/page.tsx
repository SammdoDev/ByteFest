"use client";

import CardMateri from "../../components/CardMateri";

export default function SelektorCSSPage() {
  return (
    <CardMateri
      title="Selektor CSS"
      prevHref="/dashboard/materi/css/import-css"
      nextHref="/dashboard/materi/css/properti-dasar"
    >
      <p className="text-white text-base mb-4">
        Selektor CSS digunakan untuk memilih elemen HTML yang ingin kamu styling.
        Berikut adalah tipe selektor yang umum digunakan:
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">1. Selektor Tag</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
        <code>{`h1 {\n  color: red;\n}`}</code>
      </pre>
      <p className="text-white mb-4">
        Memilih semua elemen <code className="bg-gray-200 px-1  text-black">h1</code> dan mengubah warnanya menjadi merah.
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">2. Selektor Class</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
        <code>{`.judul {\n  font-weight: bold;\n}`}</code>
      </pre>
      <p className="text-white mb-4">
        Memilih semua elemen dengan class <code className="bg-gray-200 px-1 rounded text-black">judul</code>.
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">3. Selektor ID</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
        <code>{`#header {\n  background-color: yellow;\n}`}</code>
      </pre>
      <p className="text-white mb-4">
        Memilih elemen dengan id <code className="bg-gray-200 px-1 rounded text-black">header</code>.
      </p>
    </CardMateri>
  );
}
