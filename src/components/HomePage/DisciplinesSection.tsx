import {
  FaPencilAlt,
  FaPaintBrush,
  FaCube,
  FaMusic,
  FaMicrochip,
  FaGamepad,
} from "react-icons/fa";
import DisciplineCard from "./DisciplineCard";

const disciplines = [
  {
    icon: <FaPencilAlt />,
    title: "Drawing",
    description: "Traditional sketches, anatomy studies, perspective, and creative illustration.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Digital & Pixel Art",
    description: "Digital paintings, pixel art, concept illustrations, and stylized artwork.",
  },
  {
    icon: <FaCube />,
    title: "3D Modeling & Texturing",
    description: "Creating optimized 3D models, materials, textures, and real-time assets.",
  },
  {
    icon: <FaMusic />,
    title: "Music Production",
    description: "Composing original soundtracks and music.",
  },
  {
    icon: <FaMicrochip />,
    title: "Electronic Circuits",
    description: "Designing electronic projects, experiments and funny things.",
  },
  {
    icon: <FaGamepad />,
    title: "Game Development",
    description: "Building games based in different eras aesthetic (XX century mostly) using programming, 2D & 3D graphics, and game design.",
  },
];

export default function DisciplinesSection() {
  return (
    <section id="disciplines" className="w-full py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-slate-900 mb-20">
          Habilities & Disciplines that I'd love to explore more and master
          (main hobbies).
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {disciplines.map((discipline) => (
            <DisciplineCard
              key={discipline.title}
              icon={discipline.icon}
              title={discipline.title}
              description={discipline.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
