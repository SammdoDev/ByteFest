import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Dewi Anggraini",
    review:
      "Platform ini sangat membantu! Penjelasannya mudah dipahami dan kuisnya bikin belajar makin seru.",
    rating: 5,
  },
  {
    name: "Rizky Pratama",
    review:
      "Modulnya lengkap dan interaktif. Cocok banget buat pemula yang ingin belajar web development.",
    rating: 4,
  },
  {
    name: "Siti Nabila",
    review:
      "Saya suka karena bisa belajar kapan saja. Komunitasnya juga aktif dan suportif!",
    rating: 5,
  },
];

const ReviewSection: React.FC = () => {
  return (
    <section className="bg-white text-white py-20 px-6" id="review">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Apa Kata Mereka?
        </h2>
        <p className="text-gray-400">
          Ulasan dari pengguna yang telah merasakan manfaat belajar di
          CodeWithSamm.
        </p>
      </div>

    <div className="flex flex-row overflow-x-auto gap-4 w-full h-full">
      {reviews.map((item, index) => (
        <div
        key={index}
        className="min-w-[300px] relative bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition border border-white/10"
        >
        <div className="absolute top-4 left-4 text-sky-400 text-2xl opacity-60">
          <FaQuoteLeft />
        </div>

        <p className="text-gray-300 text-sm mb-4 italic mt-10 pl-2">
          "{item.review}"
        </p>

        <div className="flex items-center justify-between">
          <h4 className="text-white font-semibold">{item.name}</h4>
          <div className="flex text-yellow-400">
            {Array.from({ length: item.rating }, (_, i) => (
            <FaStar key={i} />
            ))}
          </div>
        </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default ReviewSection;
