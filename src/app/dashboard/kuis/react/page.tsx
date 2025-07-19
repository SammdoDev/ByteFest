"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import QuizLayout from "../components/QuizLayout";
import QuizOption from "../components/QuizOption";
import QuizFinish from "../components/QuizFinish";

const questions = [
  { question: "Apa itu React?", options: ["Framework CSS", "Library untuk backend", "Library JavaScript untuk UI", "Database NoSQL"], answer: "Library JavaScript untuk UI" },
  { question: "Cara membuat komponen fungsional di React?", options: ["function MyComponent() {}", "component MyComponent {}", "def MyComponent():", "createComponent MyComponent"], answer: "function MyComponent() {}" },
  { question: "Hook yang digunakan untuk state?", options: ["useEffect", "useState", "useRef", "useContext"], answer: "useState" },
  { question: "Hook yang dipakai untuk efek samping (side effect)?", options: ["useState", "useEffect", "useCallback", "useMemo"], answer: "useEffect" },
  { question: "Props digunakan untuk?", options: ["State lokal", "Routing", "Mengirim data antar komponen", "Gaya CSS"], answer: "Mengirim data antar komponen" },
  { question: "State di React bersifat?", options: ["Global", "Immutable", "Mutable langsung", "Hanya di server"], answer: "Immutable" },
  { question: "Bagaimana cara menampilkan nilai di JSX?", options: ["{{value}}", "{value}", "[[value]]", "<value>"], answer: "{value}" },
  { question: "Hook yang digunakan untuk referensi elemen DOM?", options: ["useRef", "useMemo", "useReducer", "useLayout"], answer: "useRef" },
  { question: "Cara menangani event klik?", options: ["onClick={handleClick}", "onclick='handleClick()'", "click={handleClick}", "@click='handleClick'"], answer: "onClick={handleClick}" },
  { question: "React dibuat oleh?", options: ["Google", "Facebook", "Microsoft", "Twitter"], answer: "Facebook" },
];


export default function QuizReact() {
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
            reactScore: score + (selected === questions[current].answer ? 1 : 0),
            updatedAt: new Date(),
          },
          { merge: true }
        );
      }
    }
  };

  return (
    <QuizLayout title="Kuis React">
      {finished ? (
        <QuizFinish topic="react" score={score} total={questions.length} />
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
