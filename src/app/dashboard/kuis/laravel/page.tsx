"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import QuizLayout from "../components/QuizLayout";
import QuizOption from "../components/QuizOption";
import QuizFinish from "../components/QuizFinish";

const questions = [
  { question: "Perintah untuk membuat project Laravel baru?", options: ["composer create-project laravel", "laravel new", "php artisan new", "npm create laravel"], answer: "laravel new" },
  { question: "File konfigurasi utama Laravel?", options: ["config.php", ".env", "app.php", "config.json"], answer: ".env" },
  { question: "Command untuk menjalankan server lokal Laravel?", options: ["php artisan serve", "laravel start", "npm run dev", "php server"], answer: "php artisan serve" },
  { question: "Folder tempat controller berada?", options: ["resources/views", "routes/", "app/Controllers", "app/Http/Controllers"], answer: "app/Http/Controllers" },
  { question: "Command untuk membuat model di Laravel?", options: ["php artisan make:model", "php make model", "artisan create model", "php artisan generate:model"], answer: "php artisan make:model" },
  { question: "File untuk mendefinisikan rute web?", options: ["routes/api.php", "web.php", "routes/web.php", "app/routes.php"], answer: "routes/web.php" },
  { question: "Blade adalah?", options: ["CSS preprocessor", "Database engine", "Templating engine", "Middleware"], answer: "Templating engine" },
  { question: "Apa fungsi dari CSRF token di Laravel?", options: ["Enkripsi password", "Proteksi dari spam", "Validasi form", "Keamanan dari serangan form palsu"], answer: "Keamanan dari serangan form palsu" },
  { question: "Command untuk membuat migration?", options: ["php artisan make:migration", "php artisan migrate:make", "php make migration", "php artisan create:migration"], answer: "php artisan make:migration" },
  { question: "Perintah untuk menjalankan migration?", options: ["php artisan db:migrate", "php artisan migrate", "php migrate", "php artisan migrate:run"], answer: "php artisan migrate" },
];

export default function QuizLaravel() {
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
            laravelScore: score + (selected === questions[current].answer ? 1 : 0),
            updatedAt: new Date(),
          },
          { merge: true }
        );
      }
    }
  };

  return (
    <QuizLayout title="Kuis Laravel">
      {finished ? (
        <QuizFinish topic="Laravel" score={score} total={questions.length} />
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
