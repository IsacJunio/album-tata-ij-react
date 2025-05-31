import Foto3 from "../../../../assets/images/Foto 3.jpg";
import { useState, useEffect } from "react";

const texts = ["Album Tata Isac", "Te amo", "Te quiero", "I Love You"];

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
        setText(texts[index].substring(0, subIndex));
      },
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="hero"
      className="
  w-full min-h-screen bg-gray-800 justify-center items-center flex flex-col
  "
    >
      <img
        src={Foto3}
        alt="image-album"
        className="w-70 h-70 rounded-full object-cover mb-8 animate-fadey shadow-blue-100"
      />

      <h1 className=" text-3xl md:text-5xl font-bold text-white mb-8 h-16">
        {text}
      </h1>

      <p className="animate-fadeIn text-white text-center text-lg md:text-3xl max-w-500 mx-auto">
        Nas asas do vento, o amor se espalha, Como um sussuro doce que nunca
        falha, Em cada olhar, um mundo a descobrir, No abraço quente, o tempo a
        sumir. <br />
        E chama que arde, mas não consome, E luz que guia, dá vida e nome. No
        coração, um eteerno laço, O amor é o mais belo braço. <br /> Thalita
      </p>
    </section>
  );
}

export default Hero;
