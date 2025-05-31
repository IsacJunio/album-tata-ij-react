import { useEffect, useState } from "react";
import "./contador-flip.css"; // Crie esse arquivo para as animações

const DATA_INICIO = new Date("2024-07-25T00:00:00"); // Altere para a data desejada

function calcularTempoJuntos() {
  const agora = new Date();
  let anos = agora.getFullYear() - DATA_INICIO.getFullYear();
  let meses = agora.getMonth() - DATA_INICIO.getMonth();
  let dias = agora.getDate() - DATA_INICIO.getDate();

  if (dias < 0) {
    meses -= 1;
    const ultimoDiaMesAnterior = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      0
    ).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  return { anos, meses, dias };
}

function FlipUnit({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== display) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setDisplay(value);
        setFlipping(false);
      }, 400); // Duração da animação
      return () => clearTimeout(timeout);
    }
  }, [value, display]);

  return (
    <span className={`flip-unit ${flipping ? "flip" : ""}`}>{display}</span>
  );
}

const Contador = () => {
  const [tempo, setTempo] = useState(calcularTempoJuntos());

  useEffect(() => {
    const timer = setInterval(() => {
      setTempo(calcularTempoJuntos());
    }, 1000 * 60); // Atualiza a cada minuto
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="contador"
      className="w-full min-h-screen bg-gray-800 flex flex-col items-center justify-center px-2"
    >
      <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 text-center">
        Estamos juntos há:
      </h2>
      <div className="bg-black/80 rounded-xl px-2 py-4 md:px-8 md:py-6 flex flex-col xs:flex-row gap-4 md:gap-6 shadow-2xl items-center">
        <div className="flex flex-col items-center justify-center">
          <FlipUnit value={tempo.anos} />
          <span className="text-purple-400 text-base md:text-lg mt-2">
            Anos
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FlipUnit value={tempo.meses} />
          <span className="text-purple-400 text-base md:text-lg mt-2">
            Meses
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FlipUnit value={tempo.dias} />
          <span className="text-purple-400 text-base md:text-lg mt-2">
            Dias
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contador;
