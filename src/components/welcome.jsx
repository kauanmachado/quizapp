import logo from "/imgs/logo.png";

export default function Welcome({ onStart }) {
  return (
    <div className="text-center space-y-6">
      <img src={logo} alt="logo" className="mx-auto w-[300px]"/>
      <h1 className="text-3xl font-bold">Quiz de Algoritmos 💻</h1>
      <p className="text-gray-400">Teste seus conhecimentos sobre lógica e programação!</p>
      <button
        onClick={onStart}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-2xl transition"
      >
        Iniciar Quiz
      </button>
    </div>
  );
}
