"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const cssTopics = [
  {
    title: "Pengenalan CSS",
    description: "Apa itu CSS dan bagaimana mengatur tampilan halaman web.",
    slug: "pengenalan",
  },
  {
    title: "Cara Menyisipkan CSS",
    description: "Inline, internal, dan external CSS.",
    slug: "import-css",
  },
  {
    title: "Selektor CSS",
    description:
      "Gunakan selektor tag, class, id, dan lainnya untuk memilih elemen.",
    slug: "selektor",
  },
  {
    title: "Properti Dasar CSS",
    description:
      "Pelajari properti seperti color, font-size, margin, padding, dan lainnya.",
    slug: "properti-dasar",
  },
  {
    title: "Box Model",
    description:
      "Pahami bagaimana padding, border, dan margin mempengaruhi elemen.",
    slug: "box-model",
  },
  {
    title: "Flexbox",
    description:
      "Gunakan flexbox untuk membuat layout responsif dan fleksibel.",
    slug: "flexbox",
  },
];

export default function CssMateriPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Belajar CSS Dasar
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Pelajari bagaimana CSS digunakan untuk memperindah tampilan website
        dengan berbagai teknik styling, layout, dan animasi.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {cssTopics.map((topic, index) => (
          <Link
            key={index}
            href={`/dashboard/materi/css/${topic.slug}`}
            className="block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 flex items-center justify-between">
              {topic.title}
              <FaArrowRight className="text-sm" />
            </h2>
            <p className="text-sm text-gray-600 mt-2">{topic.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500 italic">
          “Dengan CSS, kamu bisa mengubah halaman HTML menjadi karya seni.” 🎨✨
        </p>
      </div>
    </main>
  );
}
