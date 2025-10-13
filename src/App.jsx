import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import HomeButton from "./components/home-button";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">





      <div className="w-full max-w-3xl">
        <HomeButton />
        <div className="bg-gray-800/80 rounded-2xl shadow-2xl p-16 mt-4">
        <Routes>
          <Route path="/" element={<Welcome onStart={() => navigate("/quiz")} />} />
          <Route path="/quiz" element={<Quiz onFinish={(score) => navigate(`/result?score=${score}`)} />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}
