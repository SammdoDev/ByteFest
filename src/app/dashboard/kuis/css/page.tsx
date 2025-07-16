"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const questions = [
  {
    question: "Apa singkatan dari CSS?",
    options: ["Creative Style System", "Cascading Style Sheets", "Color Style Sheet", "Central Style Sheet"],
    answer: 1,
  },
  {
    question: "Property CSS untuk mengubah warna teks adalah...",
    options: ["font-color", "text-style", "color", "text-color"],
    answer: 2,
  },
  {
    question: "Selector CSS yang digunakan untuk memilih semua elemen dengan class 'box' adalah...",
    options: [".box", "#box", "box", "*box"],
    answer: 0,
  },
];

export default function CssQuizPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  const handleAnswer = (index: number, selected: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = selected;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) newScore++;
    });
    setScore(newScore);
    setSubmitted(true);

    if (currentUser) {
      const docRef = doc(db, "quizResults", currentUser.uid);
      const prevData = (await getDoc(docRef)).data() || {};
      await setDoc(docRef, { ...prevData, cssScore: newScore }, { merge: true });
    }
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Kuis CSS</h1>

      {questions.map((q, i) => (
        <div key={i} className="mb-6">
          <p className="font-semibold">{i + 1}. {q.question}</p>
          <div className="space-y-2 mt-2">
            {q.options.map((opt, j) => (
              <label key={j} className="block">
                <input
                  type="radio"
                  name={`question-${i}`}
                  className="mr-2"
                  disabled={submitted}
                  checked={answers[i] === j}
                  onChange={() => handleAnswer(i, j)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Jawaban
        </button>
      ) : (
        <p className="text-green-600 text-lg font-semibold mt-4">
          Skor kamu: {score} dari {questions.length}
        </p>
      )}
    </main>
  );
}
