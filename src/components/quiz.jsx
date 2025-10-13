import { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "./question-card";


export default function Quiz({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1);
  };

  const next = () => {
    if (current + 1 < questions.length) setCurrent(current + 1);
    else onFinish(score);
  };

  return (
    <div className="max-w-xl w-full bg-gray-800 p-6 rounded-2xl shadow-lg">
      <QuestionCard
        data={questions[current]}
        onAnswer={handleAnswer}
      />
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          className="bg-gray-600 px-4 py-2 rounded-xl hover:bg-gray-700"
          disabled={current === 0}
        >
          Voltar
        </button>
        <button
          onClick={next}
          className="bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          {current + 1 === questions.length ? "Finalizar" : "Próxima"}
        </button>
      </div>
    </div>
  );
}
