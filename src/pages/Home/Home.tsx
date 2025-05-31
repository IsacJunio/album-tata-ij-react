import Header from "../../components/Header/Header";
import Album from "./sections/Album/Album";
import Contador from "./sections/Contador/Contador";
import Hero from "./sections/Hero/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Album />
      <Contador />
      <footer className="bg-gray-800 text-white py-4 text-center footer max-w-full">
        <p>&copy; 2025 Album Tata Isac</p>
      </footer>
    </>
  );
};

export default Home;
