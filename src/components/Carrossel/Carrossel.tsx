import { useState } from "react";

// Importa todas as imagens jpg da pasta images
const images = Object.values(
  import.meta.glob("../../assets/images/*.jpg", {
    eager: true,
    import: "default",
  })
) as string[];

const Carrossel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-120 h-120 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] flex items-center justify-center">
        <img
          src={images[index]}
          alt={`slide-${index}`}
          className="w-full h-full object-contain rounded-lg shadow-lg transition-all duration-500 bg-black/20"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-purple-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
