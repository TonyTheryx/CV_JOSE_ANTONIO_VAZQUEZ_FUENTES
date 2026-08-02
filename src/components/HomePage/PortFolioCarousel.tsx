import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const portfolioItems = [
  {
    type: "image",
    src: "src/components/HomePage/Images/Courage.png",
    title: "Courage the Cowardly Dog",
    description:
      "It was my first 3D low poly character (Courage the Cowardly Dog)",
  },
  {
    type: "video",
    src: "src/components/HomePage/Images/Air_Hockey.mp4",
    title: "Air Hockey",
    description:
      "My first 3D videogame programmed in python using pygame library, it's an important work for me because I did this when I was in 5th semester of my university, And I did it in a computer graphics course, I can't say that I did it myself because it was the work of 2 people, me and one of my friends, but with learned new things about graphics and videogames doing this.",
  },
  {
    type: "video",
    src: "src/components/HomePage/Images/Pong.mp4",
    title: "Pong Game",
    description:
      "Demostración del rig y la animación del personaje.",
  },
  {
    type: "image",
    src: "/Images/pixelart.png",
    title: "Objects of XX Century",
    description:
      "My first little website that it's kind of an experiment, because the idea was of this page it's because I would like to have a page of a lot of references of retro objects, that I could check in case I needed for my own retro projects, I did it with a little help of another friend.",
  },
];

export default function PortfolioCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((current + 1) % portfolioItems.length);

  const previous = () =>
    setCurrent(
      (current - 1 + portfolioItems.length) %
        portfolioItems.length
    );

  return (
    <div className="flex flex-col items-center">

        {/* Carrusel */}
        <div className="relative w-full max-w-2xl">

            {portfolioItems[current].type === "image" ? (
                <img
                    src={portfolioItems[current].src}
                    alt={portfolioItems[current].title}
                    className="w-full rounded-[2.5rem] shadow-2xl"
                />
            ) : (
                <video
                    src={portfolioItems[current].src}
                    controls
                    className="w-full rounded-[2.5rem] shadow-2xl"
                />
            )}

            <button
                onClick={previous}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
            >
                <FaChevronLeft />
            </button>

            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
            >
                <FaChevronRight />
            </button>

        </div>

        {/* Información */}
        <div className="mt-6 text-justify max-w-2xl">

            <h2 className="text-3xl font-bold text-white">
                {portfolioItems[current].title}
            </h2>

            <p className="mt-3 text-lg text-gray-600">
                {portfolioItems[current].description}
            </p>

        </div>

        {/* Indicadores */}
        <div className="flex gap-3 mt-6">
            {portfolioItems.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                        current === index
                            ? "bg-cyan-400 scale-125"
                            : "bg-gray-500 hover:bg-gray-300"
                    }`}
                />
            ))}
        </div>

    </div>
);
}