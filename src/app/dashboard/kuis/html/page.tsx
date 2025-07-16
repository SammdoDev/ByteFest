"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const questions = [
  { question: "Tag untuk gambar adalah?", options: ["<link>", "<img>", "<a>", "<div>"], answer: "<img>" },
  { question: "Tag heading terbesar?", options: ["<h6>", "<h1>", "<h3>", "<h4>"], answer: "<h1>" },
  { question: "Tag list tak berurutan?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>" },
  { question: "Elemen untuk membuat baris tabel?", options: ["<tr>", "<td>", "<th>", "<table>"], answer: "<tr>" },
  { question: "Input teks pendek pakai tag?", options: ["<textarea>", "<input>", "<text>", "<form>"], answer: "<input>" },
  { question: "Tag pilihan dropdown?", options: ["<checkbox>", "<select>", "<dropdown>", "<input>"], answer: "<select>" },
  { question: "Elemen untuk paragraf?", options: ["<div>", "<p>", "<text>", "<span>"], answer: "<p>" },
  { question: "Atribut gambar untuk teks alternatif?", options: ["src", "href", "alt", "value"], answer: "alt" },
  { question: "Tag hyperlink adalah?", options: ["<a>", "<link>", "<url>", "<href>"], answer: "<a>" },
  { question: "Penutup form menggunakan tag?", options: ["</form>", "<form/>", "</form>", "<endform>"], answer: "</form>" },
];

export default function QuizHtml() {
  const [userId, setUserId] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid ?? null);
    });
    return () => unsubscribe();
  }, []);

  const handleNext = async () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);

      // Simpan ke Firestore
      if (userId) {
        await setDoc(doc(db, "quizResults", userId), {
          htmlScore: score + (selected === questions[current].answer ? 1 : 0),
          updatedAt: new Date(),
        }, { merge: true });
      }
    }
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Kuis HTML</h1>

      {finished ? (
        <div className="bg-green-50 border border-green-300 p-6 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Skor Kamu: {score} / {questions.length}</h2>
          <p className="text-gray-700">Hasilmu telah disimpan. Terus semangat belajar! 🚀</p>
        </div>
      ) : (
        <div>
          <p className="text-lg font-medium mb-4">Soal {current + 1} dari {questions.length}</p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{questions[current].question}</h2>

          <div className="space-y-3">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelected(option)}
                className={`block w-full text-left px-4 py-2 rounded-lg border transition ${
                  selected === option
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!selected}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {current === questions.length - 1 ? "Lihat Hasil" : "Selanjutnya"}
          </button>
        </div>
      )}
    </main>
  );
}
