'use client';

import CardMateri from '../../components/CardMateri';

export default function FlexboxPage() {
  return (
    <CardMateri
      title="Flexbox"
      prevHref="/dashboard/materi/css/box-model"
      nextHref="/dashboard/kuis/css"
    >
      <p className="text-white text-base mb-4">
        Flexbox (Flexible Box) adalah metode layout di CSS yang digunakan untuk menyusun elemen dalam satu dimensi (baris atau kolom).
      </p>

      <h2 className="text-lg font-semibold text-blue-500 mb-2">Contoh Dasar</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
{`div.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
      </pre>

      <p className="text-white mb-4">
        <code className="bg-gray-200 px-1 rounded text-black">display: flex</code> mengaktifkan flexbox. Lalu:
      </p>

      <ul className="list-disc list-inside mb-4 text-white">
        <li><strong>justify-content</strong>: mengatur posisi horizontal</li>
        <li><strong>align-items</strong>: mengatur posisi vertikal</li>
      </ul>

      <h2 className="text-lg font-semibold text-blue-500 mb-2">Contoh HTML</h2>
      <pre className="bg-black text-white text-sm p-4 rounded-lg overflow-x-auto mb-4">
{`<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
      </pre>
    </CardMateri>
  );
}
