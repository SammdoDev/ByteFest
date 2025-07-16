"use client";

import CardMateri from '../../components/CardMateri';

export default function CaraMenyisipkanCSSPage() {
  return (
    <CardMateri
      title="Cara Menyisipkan CSS"
      prevHref="/dashboard/materi/css/pengenalan"
      nextHref="/dashboard/materi/css/selektor"
    >
      <p className="mb-4 text-white">
        Ada tiga cara utama untuk menyisipkan CSS ke dalam dokumen HTML:
        <strong> inline</strong>, <strong>internal</strong>, dan <strong>eksternal</strong>.
        Masing-masing memiliki kelebihan dan kekurangannya tergantung pada kebutuhan proyek.
      </p>

      <h2 className="text-lg font-semibold text-blue-500 mb-2">1. CSS Inline</h2>
      <p className="text-white mb-2">CSS ditulis langsung pada atribut style di tag HTML.</p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<p style="color: red; font-size: 18px;">Ini paragraf dengan CSS inline</p>`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-blue-500 mb-2">2. CSS Internal</h2>
      <p className="text-white mb-2">CSS ditulis di dalam tag &lt;style&gt; di bagian &lt;head&gt; dokumen HTML.</p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<head>
  <style>
    p {
      color: green;
      font-weight: bold;
    }
  </style>
</head>`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-blue-500 mb-2">3. CSS Eksternal</h2>
      <p className="text-white mb-2">CSS ditulis di file terpisah (.css) dan disambungkan dengan tag &lt;link&gt;.</p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`<head>
  <link rel="stylesheet" href="style.css">
</head>`}</code>
      </pre>
    </CardMateri>
  );
}
