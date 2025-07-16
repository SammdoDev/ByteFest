"use client";

import CardMateri from '../../components/CardMateri';

export default function BoxModelPage() {
  return (
    <CardMateri
      title="Box Model"
      prevHref="/dashboard/materi/css/properti-dasar"
      nextHref="/dashboard/materi/css/flexbox"
    >
      <p className="mb-4 text-white">
        Setiap elemen HTML dianggap sebagai sebuah kotak dalam CSS. Konsep ini disebut dengan <strong>Box Model</strong>, yang terdiri dari:
      </p>

      <ul className="list-disc list-inside mb-4 text-white">
        <li><strong>Content</strong>: Isi elemen, seperti teks atau gambar</li>
        <li><strong>Padding</strong>: Ruang di sekitar konten</li>
        <li><strong>Border</strong>: Garis di sekitar padding (dan konten)</li>
        <li><strong>Margin</strong>: Ruang di luar border</li>
      </ul>

      <p className="mb-4 text-white">
        Properti di atas akan memberikan ruang margin luar 20px, padding dalam 10px, dan border 2px pada elemen <code className="bg-gray-200 px-1 rounded text-black">div</code>.
      </p>

      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`div {
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}`}</code>
      </pre>
    </CardMateri>
  );
}
