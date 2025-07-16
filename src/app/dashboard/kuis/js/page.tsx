"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import QuizLayout from "../components/QuizLayout";
import QuizOption from "../components/QuizOption";
import QuizFinish from "../components/QuizFinish";

const questions = [
  { question: "Tipe data untuk nilai benar/salah?", options: ["boolean", "string", "number", "null"], answer: "boolean" },
  { question: "Cara mendeklarasikan variabel?", options: ["var", "let", "const", "semua benar"], answer: "semua benar" },
  { question: "Operator untuk pembanding identik?", options: ["==", "=", "===", "!="], answer: "===" },
  { question: "Metode untuk mengubah string menjadi integer?", options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"], answer: "parseInt()" },
  { question: "Array bisa berisi?", options: ["String", "Number", "Boolean", "Semua benar"], answer: "Semua benar" },
  { question: "Fungsi panah ditulis dengan simbol?", options: ["->", "=>", "::", "==>"], answer: "=>" },
  { question: "Metode untuk mengulang array dan memodifikasi nilainya?", options: ["forEach()", "map()", "filter()", "find()"], answer: "map()" },
  { question: "Nilai default dari variabel yang belum diinisialisasi?", options: ["null", "0", "undefined", "false"], answer: "undefined" },
  { question: "Metode untuk menambahkan item ke akhir array?", options: ["push()", "pop()", "shift()", "concat()"], answer: "push()" },
  { question: "Kata kunci untuk membuat fungsi?", options: ["func", "function", "fn", "def"], answer: "function" },
];


export default function QuizJs() {
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
            jsScore: score + (selected === questions[current].answer ? 1 : 0),
            updatedAt: new Date(),
          },
          { merge: true }
        );
      }
    }
  };

  return (
    <QuizLayout title="Kuis JavaScript">
      {finished ? (
        <QuizFinish topic="JavaScript" score={score} total={questions.length} />
      ) : (
        <>
          <p className="text-lg font-medium mb-4">Soal {current + 1} dari {questions.length}</p>
          <h2 className="text-xl font-semibold text-white mb-4">{questions[current].question}</h2>

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
