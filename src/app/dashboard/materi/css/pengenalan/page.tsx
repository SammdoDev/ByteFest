"use client";

import CardMateri from "../../components/CardMateri";

export default function PengenalanCSSPage() {
  return (
    <CardMateri
      title="Pengenalan CSS"
      prevHref="/dashboard/materi/css"
      nextHref="/dashboard/materi/css/import-css"
    >
      <p className="text-white mb-4">
        CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk
        mengatur tampilan dan gaya elemen HTML di halaman web. Dengan CSS,
        kamu dapat mengubah warna, ukuran, layout, dan animasi dari
        elemen-elemen web.
      </p>

      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <p className="text-sm text-white">
          CSS memungkinkan pemisahan antara struktur (HTML) dan tampilan,
          sehingga kode lebih bersih dan mudah dikelola.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-500 mb-2">
        Contoh Penggunaan CSS
      </h2>
      <p className="text-white mb-2">
        Berikut adalah contoh sederhana penggunaan CSS secara internal:
      </p>

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

      <p className="text-white mb-4">
        Dengan CSS di atas, latar belakang halaman akan menjadi biru muda dan
        judul akan berwarna biru tua serta memiliki margin kiri. Kita akan
        membahas cara lain menyisipkan CSS pada halaman selanjutnya.
      </p>
    </CardMateri>
  );
}
