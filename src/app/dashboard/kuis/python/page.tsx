"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import QuizLayout from "../components/QuizLayout";
import QuizOption from "../components/QuizOption";
import QuizFinish from "../components/QuizFinish";

const questions = [
  { question: "Fungsi untuk mencetak output?", options: ["echo()", "printf()", "print()", "console.log()"], answer: "print()" },
  { question: "Tipe data untuk angka desimal?", options: ["int", "str", "float", "bool"], answer: "float" },
  { question: "Simbol operator logika 'dan'?", options: ["&", "and", "&&", "||"], answer: "and" },
  { question: "Struktur pengulangan di Python?", options: ["for", "loop", "repeat", "iterate"], answer: "for" },
  { question: "Tipe data untuk teks?", options: ["int", "text", "str", "char"], answer: "str" },
  { question: "Fungsi untuk menghitung panjang list?", options: ["count()", "len()", "size()", "length()"], answer: "len()" },
  { question: "Simbol untuk komentar satu baris?", options: ["//", "<!--", "#", "/*"], answer: "#" },
  { question: "Cara membuat fungsi di Python?", options: ["function myFunc()", "def myFunc():", "func myFunc()", "fn myFunc()"], answer: "def myFunc():" },
  { question: "Struktur kondisi di Python?", options: ["if () {}", "if:", "if then", "when"], answer: "if:" },
  { question: "Tipe data boolean di Python?", options: ["Yes/No", "1/0", "true/false", "True/False"], answer: "True/False" },
];

export default function QuizPython() {
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
            pythonScore: score + (selected === questions[current].answer ? 1 : 0),
            updatedAt: new Date(),
          },
          { merge: true }
        );
      }
    }
  };

  return (
    <QuizLayout title="Kuis Python">
      {finished ? (
        <QuizFinish topic="Python" score={score} total={questions.length} />
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
