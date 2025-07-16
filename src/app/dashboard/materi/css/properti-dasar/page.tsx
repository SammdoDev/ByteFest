"use client";

import CardMateri from "../../components/CardMateri";

export default function PropertiDasarCSSPage() {
  return (
    <CardMateri
      title="Properti Dasar CSS"
      prevHref="/dashboard/materi/css/selektor"
      nextHref="/dashboard/materi/css/box-model"
    >
      <p className="text-white text-base mb-4">
        Dalam CSS, properti digunakan untuk mengatur tampilan elemen HTML. Berikut ini adalah beberapa properti dasar yang umum digunakan:
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">1. color</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-2">
        <code>{`p {\n  color: red;\n}`}</code>
      </pre>
      <p className="text-white mb-4">
        Mengubah warna teks pada elemen paragraf menjadi merah.
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">2. font-size</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-2">
        <code>{`h1 {\n  font-size: 32px;\n}`}</code>
      </pre>
      <p className="text-white mb-4">
        Mengatur ukuran huruf pada elemen heading menjadi 32 piksel.
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">3. margin</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-2">
        <code>{`div {\n  margin: 20px;\n}`}</code>
      </pre>
      <p className="text-white mb-4">
        Menambahkan jarak luar (luar border) sebesar 20 piksel pada semua sisi elemen.
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mb-2">4. padding</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-2">
        <code>{`div {\n  padding: 10px;\n}`}</code>
      </pre>
      <p className="text-white mb-4">
        Menambahkan jarak dalam (antara border dan konten) sebesar 10 piksel.
      </p>
    </CardMateri>
  );
}
