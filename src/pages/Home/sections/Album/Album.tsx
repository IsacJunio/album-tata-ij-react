import Carrossel from "../../../../components/Carrossel/Carrossel";

const Album = () => {
  return (
    <div
      id="album"
      className=" w-full min-h-screen bg-gray-800  items-center flex flex-col text-white"
    >
      <div className="text-5xl font-bold mb-15">Album</div>

      <Carrossel />
    </div>
  );
};

export default Album;
