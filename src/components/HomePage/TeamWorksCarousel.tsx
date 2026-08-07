import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamWorksItems = [
  {
    type: "image",
    src: "src/components/HomePage/Images/MiCanasta1.png",
    title: "Mi Canasta (My Basket or My Pantry)",
    description:
      "MiCanasta is a website app where you can manage the money you spend for food, all we know that the less money we spend the more things we can buy and also save it for an emergency."
      ,
  },
  {
    type: "image",
    src: "src/components/HomePage/Images/MiCanasta2.png",
    title: "Mi Canasta (My Basket or My Pantry)",
    description:
      "Mi Canasta (My Basket or My Pantry) is a very simple app, first you register to get an acount, then you can set your budget and then make a list about all kind of food you will buy in a month, and you can make it defining how much does the food cost, like litters, kilograms, or only defining a bag or can of food.",
  },
  {
    type: "image",
    src: "src/components/HomePage/Images/MiCanasta3.png",
    title: "Mi Canasta (My Basket or My Pantry)",
    description:
      "At the end we add a function were you can make a recipe with all the ingredients that you wish, like the list of the month but for recipes. The app includes functions like, set your budget, make your pantry, check 3 diferent supermarkets in a catalog (our city supermarkets like a test trying to include real supermarkets and check the lowest prize in every food), history where you could check all pantries that you created before (including the money you spend to know if you exceeded the badget).",
  },
  {
  type: "image",
    src: "src/components/HomePage/Images/Mi_Canasta_Logo.png",
    title: "Mi Canasta Logtype",
    description:
      "I did the Mi Canasta logtype using inkscape.",
  }
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

            <h2 className="text-3xl font-bold text-gray-700">
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
