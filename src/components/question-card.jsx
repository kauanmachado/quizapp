import { useState } from "react";

export default function QuestionCard({ data, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleClick = (i) => {
    setSelected(i);
    setShowExplanation(true);
    onAnswer(i === data.answer);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{data.question}</h2>
      <div className="space-y-3">
        {data.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={showExplanation}
            className={`w-full text-left px-4 py-2 rounded-xl transition ${
              selected === i
                ? i === data.answer
                  ? "bg-green-600"
                  : "bg-red-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {showExplanation && (
        <p className="mt-4 text-gray-300 text-sm italic">
          💡 {data.explanation}
        </p>
      )}
    </div>
  );
}
