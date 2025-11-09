import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const results = state?.results || [];
  const navigate = useNavigate();

  const score = results.filter((r) => r.correctBool).length;

  if (!results.length) {
    return (
      <div>
        <p>Nenhum resultado disponível.</p>
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl mb-4">
        Resultado: {score} / {results.length}
      </h2>

      <div className="space-y-4">
        {results.map((r, i) => (
          <div key={i} className="p-4 rounded bg-gray-700">
            <p className="font-semibold">{`Pergunta ${i + 1}: ${r.question}`}</p>
            <p>{`Sua resposta: ${r.selected !== null ? r.options[r.selected] : "—"}`}</p>
            <p>{`Resposta correta: ${r.options[r.correct]}`}</p>
            <p
              className={`mt-2 ${
                r.correctBool ? "text-green-300" : "text-red-300"
              }`}
            >
              {r.correctBool ? "Correto" : "Errado"}
            </p>
            {r.explanation && (
              <details className="mt-2">
                <summary className="cursor-pointer">Explicação</summary>
                <p className="mt-2">{r.explanation}</p>
              </details>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Voltar ao início
        </button>
        <button
          onClick={() => navigate("/quiz")}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Jogar novamente
        </button>
      </div>
    </div>
  );
}
