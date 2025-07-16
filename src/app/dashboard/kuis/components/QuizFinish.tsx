export default function QuizFinish({ score, total }: { score: number; total: number }) {
  return (
    <div className="bg-green-50 border border-green-300 p-6 rounded-xl text-center">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Skor Kamu: {score} / {total}</h2>
      <p className="text-gray-700">Hasilmu telah disimpan. Terus tingkatkan skill CSS-mu! 💪</p>
    </div>
  );
}
