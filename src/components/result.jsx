import { useSearchParams, useNavigate } from "react-router-dom";

export default function Result() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const score = params.get("score");

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Resultado Final 🎉</h1>
      <p className="text-xl mb-6">Você acertou {score} de 15 perguntas!</p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-2xl"
      >
        Jogar novamente
      </button>
    </div>
  );
}
