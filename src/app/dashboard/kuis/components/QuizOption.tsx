type QuizOptionProps = {
  option: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function QuizOption({ option, isSelected, onClick }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-4 py-2 rounded-lg border transition font-medium ${
        isSelected
          ? "bg-blue-500 border-blue-500 text-white"
          : "border-gray-300"
      }`}
    >
      {option}
    </button>
  );
}
