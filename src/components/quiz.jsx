import { useEffect, useState } from "react";
import { questions } from "../data/questions";

export default function Quiz({ onFinish }) {
  const [setQuestions] = useState(); // placeholder to satisfy lint if needed
  const [shuffled, setShuffled] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // shuffle e seleciona 5 perguntas
    const pick = [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
    setShuffled(pick);
  }, []);

  if (shuffled.length === 0) return <div>Carregando...</div>;

  const current = shuffled[index];

  function selectOption(optIndex) {
    const next = [...answers];
    next[index] = optIndex;
    setAnswers(next);
  }

  function handleNext() {
    if (index < shuffled.length - 1) {
      setIndex(index + 1);
      return;
    }
    // montar resultados detalhados e enviar para Result
    const results = shuffled.map((q, i) => {
      const selected = typeof answers[i] === "number" ? answers[i] : null;
      return {
        question: q.question,
        options: q.options,
        selected,
        correct: q.answer,
        correctBool: selected === q.answer,
        explanation: q.explanation || "",
      };
    });
    onFinish(results);
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl mb-4">{`Pergunta ${index + 1} de ${shuffled.length}`}</h2>
      <p className="mb-6">{current.question}</p>

      <div className="grid gap-3">
        {current.options.map((opt, i) => {
          const isSelected = answers[index] === i;
          return (
            <button
              key={i}
              onClick={() => selectOption(i)}
              className={`p-3 text-left rounded ${isSelected ? "bg-blue-600" : "bg-gray-700"}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-between">
        <div />
        <button
          onClick={handleNext}
          disabled={typeof answers[index] !== "number"}
          className="bg-green-600 px-4 py-2 rounded disabled:opacity-50"
        >
          {index < shuffled.length - 1 ? "Próxima" : "Finalizar"}
        </button>
      </div>
    </div>
  );
}
