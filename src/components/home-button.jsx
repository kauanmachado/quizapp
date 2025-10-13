import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react"; // ícone opcional (instale com `npm install lucide-react`)

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl shadow-md transition"
    >
      <Home size={18} />
      <span className="hidden sm:inline">Início</span>
    </button>
  );
}
