import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamWorksItems = [
  {
    type: "image",
    src: "src/components/HomePage/Images/Courage.png",
    title: "Team Work 1",
    description:
      "Description of the first team work. Replace this example with the real content.",
  },
  {
    type: "video",
    src: "src/components/HomePage/Images/Pong.mp4",
    title: "Team Work 2",
    description:
      "Description of the second team work. Replace this example with the real content.",
  },
  {
    type: "image",
    src: "src/components/HomePage/Images/Courage.png",
    title: "Team Work 3",
    description:
      "Description of the third team work. Replace this example with the real content.",
  },
];

export default function TeamWorksCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((current + 1) % teamWorksItems.length);

  const previous = () =>
    setCurrent(
      (current - 1 + teamWorksItems.length) %
        teamWorksItems.length
    );

  return (
    <div className="flex flex-col items-center">

        {/* Carrusel */}
        <div className="relative w-full max-w-2xl">

            {teamWorksItems[current].type === "image" ? (
                <img
                    src={teamWorksItems[current].src}
                    alt={teamWorksItems[current].title}
                    className="w-full rounded-[2.5rem] shadow-2xl"
                />
            ) : (
                <video
                    src={teamWorksItems[current].src}
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
                {teamWorksItems[current].title}
            </h2>

            <p className="mt-3 text-lg text-gray-600">
                {teamWorksItems[current].description}
            </p>

        </div>

        {/* Indicadores */}
        <div className="flex gap-3 mt-6">
            {teamWorksItems.map((_, index) => (
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
