"use client";

import CardMateri from "../../components/CardMateri";

export default function TagTextHeadingPage() {
  return (
    <CardMateri
      title="Tag Teks & Heading"
      prevHref="/dashboard/materi/html/struktur-dasar"
      nextHref="/dashboard/materi/html/link-gambar"
    >
      <p className="text-white mb-4">
        HTML menyediakan berbagai tag untuk mengatur teks, baik sebagai judul, paragraf, maupun penekanan teks. 
        Berikut ini adalah tag-tag umum yang digunakan:
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Heading</h2>
        <p className="text-white mb-2">
          Heading digunakan untuk menampilkan judul dalam berbagai tingkat, mulai dari <code>&lt;h1&gt;</code> 
          (paling penting) hingga <code>&lt;h6&gt;</code> (paling kecil).
        </p>
        <pre className="bg-black text-white  text-sm p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<h3>Sub Sub Judul</h3>`}</code>
        </pre>
        <p className="text-white ">Contoh tampilan:</p>
        <div className="bg-gray-800 p-4 rounded mb-6">
          <h1 className="text-3xl font-bold">Judul Utama (h1)</h1>
          <h2 className="text-2xl font-semibold mt-2">Sub Judul (h2)</h2>
          <h3 className="text-xl font-medium mt-1">Sub Sub Judul (h3)</h3>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">2. Paragraf & Penekanan</h2>
        <p className="text-white mb-2">
          Tag paragraf <code>&lt;p&gt;</code> digunakan untuk menulis teks biasa. Beberapa tag penekanan lain seperti:
        </p>
        <ul className="list-disc pl-6 text-white mb-3">
          <li><code>&lt;b&gt;</code> untuk <b>teks tebal</b></li>
          <li><code>&lt;i&gt;</code> untuk <i>teks miring</i></li>
          <li><code>&lt;u&gt;</code> untuk <u>teks garis bawah</u></li>
          <li><code>&lt;strong&gt;</code> dan <code>&lt;em&gt;</code> untuk penekanan makna</li>
        </ul>

        <pre className="bg-black text-white  text-sm p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`<p>Ini paragraf biasa.</p>
<p><b>Teks tebal</b> dan <i>teks miring</i>.</p>
<p><strong>Strong</strong> & <em>Emphasized</em>.</p>`}</code>
        </pre>

        <p className="text-white ">Contoh tampilan:</p>
        <div className="bg-gray-50 p-4 rounded text-black">
          <p>Ini paragraf biasa.</p>
          <p><b>Teks tebal</b> dan <i>teks miring</i>.</p>
          <p><strong>Strong</strong> & <em>Emphasized</em>.</p>
        </div>
      </div>
    </CardMateri>
  );
}
