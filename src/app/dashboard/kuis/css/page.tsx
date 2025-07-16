"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import QuizLayout from "../components/QuizLayout";
import QuizOption from "../components/QuizOption";
import QuizFinish from "../components/QuizFinish";

const questions = [
  { question: "Properti CSS untuk mengubah warna teks?", options: ["background", "text-color", "font-color", "color"], answer: "color" },
  { question: "Properti untuk memberi jarak di dalam elemen?", options: ["margin", "gap", "padding", "spacing"], answer: "padding" },
  { question: "Selektor untuk memilih elemen dengan id 'header'?", options: ["#header", ".header", "header", "$header"], answer: "#header" },
  { question: "Properti untuk mengatur ukuran huruf?", options: ["font-size", "size", "text-size", "font"], answer: "font-size" },
  { question: "Nilai properti 'display' untuk membuat flex container?", options: ["block", "inline", "grid", "flex"], answer: "flex" },
  { question: "Properti untuk memberi garis di sekitar elemen?", options: ["border", "outline", "box", "frame"], answer: "border" },
  { question: "Selector untuk semua elemen paragraf?", options: ["#p", "p", ".p", "<p>"], answer: "p" },
  { question: "Properti untuk mengatur jarak luar elemen?", options: ["spacing", "margin", "padding", "gap"], answer: "margin" },
  { question: "Unit CSS untuk persentase ukuran?", options: ["px", "em", "%", "rem"], answer: "%" },
  { question: "Properti untuk mengatur latar belakang elemen?", options: ["color", "background", "bg", "fill"], answer: "background" },
];

export default function QuizCss() {
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
            cssScore: score + (selected === questions[current].answer ? 1 : 0),
            updatedAt: new Date(),
          },
          { merge: true }
        );
      }
    }
  };

  return (
    <QuizLayout title="Kuis CSS">
      {finished ? (
        <QuizFinish score={score} total={questions.length} />
      ) : (
        <>
          <p className="text-lg font-medium mb-4">
            Soal {current + 1} dari {questions.length}
          </p>
          <h2 className="text-xl font-semibold text-gray-50 mb-4">
            {questions[current].question}
          </h2>

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
