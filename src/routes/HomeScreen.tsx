
import "../CSS/HomeScreen.css";
import WarningBox1 from "../components/warningBox1";
import WarningBox from "../components/warningBox";
import React, { useRef } from "react";
import Tx from "../components/SVG/Tx";    
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DisciplineCard from "../components/HomePage/DisciplineCard";
import PortfolioCarousel from "../components/HomePage/PortFolioCarousel"
import TechCard from "../components/HomePage/TechCard";
import {
  FaPencilAlt,
  FaPaintBrush,
  FaCube,
  FaMusic,
  FaMicrochip,
  FaGamepad,
  FaJava
} from "react-icons/fa";
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
} from "react-icons/si"
import { FaYoutube, 
    FaInstagram, 
    FaTiktok,
    FaPinterest } from "react-icons/fa";
gsap.registerPlugin(useGSAP);
// Animation for bubbles
const bubbles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 40 + Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 10 + Math.random() * 10,
}));


export default function HomeScreen() {

    
    
//Tech Card
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
        description:
            "For all my electronic projects.",
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
        description:
            "I use it for specific things, like web graphics or animations.",
    },
    {
        icon: <SiBlender size={64} className="text-black" />,
        title: "Blender",
        description:
            "My favorite 3D program (because it's free!).",
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
    }
];

// Sections
const sections = [
  { title: "Portfolio", target: "portfolio", color: "from-white via-cyan-600 to-cyan-300" },
  { title: "Mastering", target: "mastering", color: "from-white via-blue-800 to-blue-200" },
  { title: "Disciplines", target: "disciplines", color: "from-white via-cyan-600 to-cyan-300" },
  { title: "Technologies", target: "technologies", color: "from-white via-blue-800 to-blue-200" },
];

  // Animation for the main text
  const container = useRef(null);
  const text = "Hello My name is Joseph TonyTheryx, I am an artist and a developer, I like to design retro and diferent experiences.";
  const words = text.split(" ");
 useGSAP(() => {
  gsap.from(".word", {
    y: 40,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    ease: "power3.out",
  });
}, { scope: container, dependencies: [words]});


//Animation for the box
const boxRef = useRef(null);
useGSAP(() => {
  gsap.to(boxRef.current, {
    x: 100,
    scale: 1.2,
    duration: 1,
  });
}, { scope: boxRef, dependencies: []});


  return (
    <div className="relative min-h-screen overflow-hidden bg-sky">
      <WarningBox1 message="This is a warning message!" />
      <WarningBox message="This is another warning message!" />
      

{/* Welcome box */}
     <main className="relative z-10">
        
        <div className="box" ref={boxRef}> 
            Welcome
        </div>

{/* Introduction */}
 <section 
    ref={container}
    className="min-h-[90vh] flex items-center justify-center px-10 ">


{/* Círculo */}
    <div className="relative w-96 h-96 flex items-center justify-center">

        {/* Anillo exterior */}
        <div
            className="
                absolute
                inset-0
                rounded-full
                border-[10px]
                border-blue-700
                border-dashed
                animate-spin
            "
            style={{
                clipPath: "polygon(0 0,100% 0,100% 42%,0 42%,0 58%,100% 58%,100% 100%,0 100%)"
            }}
        />

        {/* Disco central */}
        <div
            className="
                w-56
                h-56
                rounded-full
                bg-blue-600
                shadow-[0_0_60px_rgba(0,200,255,.5)]
            "
        />

    </div>
            
    {/* Principal text */}
        <div className="
            relative
            
            max-w-7xl
            rounded-[40px]
            backdrop-blur-xl
            bg-white/10
            border border-white/20
            shadow-2xl
            p-16
            flex
            justify-between
            items-center
        ">

    {/* Index */}
    <div
        className="
            absolute
            left-8
            -top-6
            flex
            gap-3
            z-20
        "
    >

    {sections.map(section => (

        <button
            key={section.title}
            onClick={() =>
                document
                    .getElementById(section.target)
                    ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`
                group
                relative
                px-10
                py-4
                text-white
                font-black
                tracking-wide
                bg-gradient-to-b
                ${section.color}
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-105
                active:scale-95
                [clip-path:polygon(12%_0%,100%_0%,88%_100%,0%_100%)]
            `}
        >

            <span className="relative z-10">
                {section.title}
            </span>

        </button>

    ))}
</div>            

            <div className="max-w-3xl">

                <h1 className="
                    text-6xl
                    md:text-7xl
                    lg:text-8xl
                    font-black
                    text-black
                    leading-none
                ">
                    Joseph TonyTheryx
                </h1>

                <p className="
                    mt-8
                    text-xl
                    md:text-2xl
                    text-black/90
                    max-w-2xl
                ">

                   {words.map((word, index) => (
                    <span key={index} className="word inline-block m-1">
                      {word}
                    </span>
                  ))}

                </p>

                <button
                onClick={() => {
                    document
                        .getElementById("portfolio")
                        ?.scrollIntoView({
                            behavior: "smooth",
                        });
                }}
                className="
                    mt-10
                    px-10
                    py-4
                    rounded-full
                    bg-cyan-400
                    hover:bg-cyan-300
                    text-white
                    text-xl
                    font-semibold
                    transition
                "
            >
                Go to Portfolio
            </button>

            </div>

            <div className="
                w-64
                h-64
                rounded-full
                bg-linear-to-b from-white/30 via-blue-600/90 to-white/30
                backdrop-blur-md
                border
                border-white/30
                flex
                items-center
                justify-center
                text-8xl
                font-black
                text-white
            ">
                T
            </div>

        </div>

    </section>

    {/* CONTENEDOR DEL RESTO */}
    <section 
    id="portfolio"
    className="
        mx-auto
        w-[90%]
        max-w-7xl
        rounded-[40px]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        shadow-2xl
        p-10
        mb-24
    ">

        <section className="w-full py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>

                <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-6">
                    Portfolio
                </p>

                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                    Works
                </h2>

                <p className="mt-10 text-xl leading-10 text-slate-600">
                   I am a multidisciplinary artist and developer, I like to create diferent types of things and experiences, but it's kind of dificult trying to learn about different areas at the same time,
                   so I am trying to focus on a few areas that I really like and want to master, but I also want to keep learning about other areas that I find interesting.

                </p>
                <p className="mt-6 text-xl leading-10 text-slate-600 gap-5">
                I have worked in few works, but here there are the most important works that I ever worked.
                </p>
                
            </div>

            {/* Imagen */}
           <div
            className="
                relative
                p-8
                rounded-[40px]
                bg-gradient-to-b
                to-blue-300/100
                to-blue-300/100
                via-white/100
                
                backdrop-blur-xl
                border
                border-cyan-200/60
                shadow-[0_0_30px_rgba(0,180,255,0.35)]
                before:absolute
                before:inset-3
                before:rounded-[30px]
                before:border
                before:border-white/40
                before:pointer-events-none
            "
            >

                <PortfolioCarousel/>

            </div>
            
                {/* Team Works */}
            <div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Team works
            </h2>
                <p className="mt-6 text-xl leading-10 text-slate-600 gap-5">
            Next works were works that I participated but they were works with more people behind.
                </p>

                
            </div>
                
                <div>
                </div>

                {/* The end */}
                <div>
                <p className="mt-6 text-xl leading-10 text-slate-600 gap-5">
                    I have more art works, but I save those in my social media, that you could find at the end of this page.
                </p>    
                </div>
        </div>

    </section>

    </section>

{/* Section of habilities & disciplines */}
<section id="disciplines" className="w-full py-24 px-8">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-black text-slate-900 mb-20">
      Habilities & Disciplines that I'd love to explore more and master (Hobbies)
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

      <DisciplineCard
        icon={<FaPencilAlt />}
        title="Drawing"
        description="Traditional sketches, anatomy studies, perspective, and creative illustration."
      />

      <DisciplineCard
        icon={<FaPaintBrush />}
        title="Digital & Pixel Art"
        description="Digital paintings, pixel art, concept illustrations, and stylized artwork."
      />

      <DisciplineCard
        icon={<FaCube />}
        title="3D Modeling & Texturing"
        description="Creating optimized 3D models, materials, textures, and real-time assets."
      />

      <DisciplineCard
        icon={<FaMusic />}
        title="Music Production"
        description="Composing original soundtracks and music."
      />

      <DisciplineCard
        icon={<FaMicrochip />}
        title="Electronic Circuits"
        description="Designing electronic projects, experiments and funny things."
      />

      <DisciplineCard
        icon={<FaGamepad />}
        title="Game Development"
        description="Building games based in different eras aesthetic (XX century mostly) using programming, 2D & 3D graphics, and game design."
      />

    </div>

  </div>

</section>

        {/* Section of programation */}
        <section id="technologies" className="space-y-8">

            <h2
                className="
                text-5xl
                font-black
                text-center
                "
            >
                Programming Languages & Tools
            </h2>

            <div
                className="
                grid
                grid-cols-2
                gap-8
                "
            >
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

    {/* FOOTER */}
    <footer className="
         bg-linear-to-b from-gray-100/40 via-gray-600/100 to-gray-300/100
        backdrop-blur-xl
        border-t
        border-white/40
        px-10
        py-12
    ">

        <div className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-4
            gap-10
        ">

            <div>
                <h3 className="font-bold text-lg text-white">Contacto</h3>
                <p className="text-white">TonyTheryx@gmail.com</p>
            </div>

          {/* Redes Sociales */}
                <div>
        <h3 className="text-lg text-white font-bold text-slate-800 mb-4">
            Redes Sociales
        </h3>

        <div className="flex gap-4">

            <a
                href="https://www.youtube.com/@tonytheryx7577"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    w-12 h-12
                    rounded-full
                    bg-linear-to-b from-white via-red-500 to-red-400
                    hover:bg-red-400
                    text-white
                    flex
                    items-center
                    justify-center
                    transition
                    hover:scale-110
                "
            >
                <FaYoutube size={24}/>
            </a>

            <a
                href="https://www.instagram.com/tonytheryx/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    w-12 h-12
                    rounded-full
                    bg-linear-to-b from-white via-pink-500 to-pink-400
                    hover:bg-pink-400
                    text-white
                    flex
                    items-center
                    justify-center
                    transition
                    hover:scale-110
                "
            >
                <FaInstagram size={22}/>
            </a>

            <a
                href="https://pin.it/A8pSQkhO0"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    w-12 h-12
                    rounded-full
                    bg-linear-to-b from-white via-pink-500 to-pink-400
                    hover:bg-pink-400
                    text-white
                    flex
                    items-center
                    justify-center
                    transition
                    hover:scale-110
                "
            >
                <FaPinterest size={22}/>
            </a>

            <a
                href="https://www.tiktok.com/@tonytheryx?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    w-12 h-12
                    rounded-full
                    bg-linear-to-b from-white via-black to-gray-300
                    hover:bg-gray-800
                    text-white
                    flex
                    items-center
                    justify-center
                    transition
                    hover:scale-110
                "
            >
                <FaTiktok size={22}/>
            </a>

        </div>
    </div>

            <div className="flex justify-center items-center">
                <Tx/>
            </div>

            <div className="text-right">
                <p className="text-white">© 2026 Joseph TonyTheryx</p>
            </div>

        </div>

    </footer>

</main>

    </div>
  );
}