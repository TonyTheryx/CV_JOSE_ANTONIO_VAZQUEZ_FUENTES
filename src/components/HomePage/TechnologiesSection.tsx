import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiArduino,
  SiTypescript,
  SiBlender,
  SiGodotengine,
  SiPostgresql,
  SiInkscape,
  SiKrita,
  SiLmms,
} from "react-icons/si";
import TechCard from "./TechCard";

const technologies = [
  {
    icon: <SiJavascript size={64} className="text-black" />,
    title: "JavaScript",
    description:
      "I use JavaScript to build web applications with React and Node.js. I understand ES6+, asynchronous programming, APIs and component-based development.",
  },
  {
    icon: <SiTypescript size={64} className="text-black" />,
    title: "TypeScript",
    description:
      "I use TypeScript in React projects to create scalable and type-safe applications.",
  },
  {
    icon: <SiReact size={64} className="text-black" />,
    title: "React",
    description:
      "I build reusable components, responsive interfaces and interactive web applications using React, I have worked with react native for UniRaite.",
  },
  {
    icon: <SiCplusplus size={64} className="text-black" />,
    title: "C++",
    description:
      "I use C++ for algorithms, graphics programming and game development.",
  },
  {
    icon: <SiPython size={64} className="text-black" />,
    title: "Python",
    description:
      "I use Python for scripting, OpenGL experiments, automation and learning computer graphics.",
  },
  {
    icon: <SiMysql size={64} className="text-black" />,
    title: "MySQL",
    description:
      "I design relational databases and work with SQL queries for full-stack applications, it's my common database mannager.",
  },
  {
    icon: <SiPostgresql size={64} className="text-black" />,
    title: "PostgreSQL",
    description:
      "I usually work with MySql (only for experiments and trying things), and when things need to be more structured or with more data I use Postgresql.",
  },
  {
    icon: <FaJava size={64} className="text-black" />,
    title: "Java",
    description:
      "It is one of my main programming lenguage because I have worked with java since I started the university",
  },
  {
    icon: <SiArduino size={64} className="text-black" />,
    title: "Arduino",
    description: "For all my electronic projects.",
  },
  {
    icon: <SiHtml5 size={64} className="text-black" />,
    title: "HTML",
    description:
      "I learned in 6th semester, but I don't use it too much because I use react.",
  },
  {
    icon: <SiCss size={64} className="text-black" />,
    title: "CSS",
    description: "I use it for specific things, like web graphics or animations.",
  },
  {
    icon: <SiBlender size={64} className="text-black" />,
    title: "Blender",
    description: "My favorite 3D program (because it's free!).",
  },
  {
    icon: <SiGodotengine size={64} className="text-black" />,
    title: "GodotEngine",
    description:
      "I like godot it's a fast way to program videogames, and also a powerful tool for it.",
  },
  {
    icon: <SiInkscape size={64} className="text-black" />,
    title: "Inkscape",
    description:
      "I use it to create SVG's or vector images (it's an It is an incredible tool for images that requires precision.) ",
  },
  {
    icon: <SiKrita size={64} className="text-black" />,
    title: "Krita",
    description:
      "I use it to draw digital things, it's more for artworks and draw details.",
  },
  {
    icon: <SiLmms size={64} className="text-black" />,
    title: "LMMS",
    description:
      "A simple music producer program that I always use (It could be simple, but I think I can do excelent works with it).",
  },
];

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="space-y-8">
      <h2 className="text-5xl font-black text-center">
        Programming Languages & Tools
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {technologies.map((tech) => (
          <TechCard
            key={tech.title}
            icon={tech.icon}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </div>
    </section>
  );
}
