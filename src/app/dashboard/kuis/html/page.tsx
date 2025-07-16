"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import QuizLayout from "../components/QuizLayout";
import QuizOption from "../components/QuizOption";
import QuizFinish from "../components/QuizFinish";

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
      if (userId) {
        await setDoc(
          doc(db, "quizResults", userId),
          {
            htmlScore: score + (selected === questions[current].answer ? 1 : 0),
            updatedAt: new Date(),
          },
          { merge: true }
        );
      }
    }
  };

  return (
    <QuizLayout title="Kuis HTML">
      {finished ? (
        <QuizFinish score={score} total={questions.length} />
      ) : (
        <>
          <p className="text-lg font-medium mb-4">Soal {current + 1} dari {questions.length}</p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{questions[current].question}</h2>

          <div className="space-y-3">
            {questions[current].options.map((option, i) => (
              <QuizOption
                key={i}
                option={option}
                isSelected={selected === option}
                onClick={() => setSelected(option)}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!selected}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {current === questions.length - 1 ? "Lihat Hasil" : "Selanjutnya"}
          </button>
        </>
      )}
    </QuizLayout>
  );
}
