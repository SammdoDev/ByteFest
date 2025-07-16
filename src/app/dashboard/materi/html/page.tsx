"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const htmlTopics = [
  {
    title: "Pengenalan HTML",
    description: "Apa itu HTML dan mengapa penting untuk web development.",
    slug: "pengenalan",
  },
  {
    title: "Struktur Dasar HTML",
    description: "Tag-tag penting seperti <html>, <head>, <body>, dan lainnya.",
    slug: "struktur-dasar",
  },
  {
    title: "Tag Teks & Heading",
    description:
      "Cara menggunakan tag <h1> - <h6>, <p>, <b>, <i>, dan lain-lain.",
    slug: "tag-text-heading",
  },
  {
    title: "Link & Gambar",
    description: "Menambahkan <a> dan <img> ke halaman HTML.",
    slug: "link-gambar",
  },
  {
    title: "List & Table",
    description: "Membuat daftar (ordered/unordered) dan tabel HTML.",
    slug: "list-table",
  },
  {
    title: "Formulir",
    description: "Membuat daftar (ordered/unordered) dan tabel HTML.",
    slug: "form",
  },
];

export default function HtmlMateriPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Belajar HTML Dasar
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Di sini kamu akan mempelajari dasar-dasar HTML, fondasi utama dari semua
        halaman web. Mulai dari struktur, tag penting, hingga praktik terbaik.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {htmlTopics.map((topic, index) => (
          <Link
            key={index}
            href={`/dashboard/materi/html/${topic.slug}`}
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
          “Mulailah dari dasar, dan bangunlah dunia digitalmu sendiri.” 🌐
        </p>
      </div>
    </main>
  );
}
