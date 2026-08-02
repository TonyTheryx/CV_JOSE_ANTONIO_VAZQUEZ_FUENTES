import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const sections = [
  { title: "Portfolio", target: "portfolio", color: "from-white via-cyan-600 to-cyan-300" },
  { title: "Mastering", target: "mastering", color: "from-white via-blue-800 to-blue-200" },
  { title: "Disciplines", target: "disciplines", color: "from-white via-cyan-600 to-cyan-300" },
  { title: "Technologies", target: "technologies", color: "from-white via-blue-800 to-blue-200" },
];

const text =
  "Hello My name is Joseph TonyTheryx, I am an artist and a developer, I like to design retro and diferent experiences.";
const words = text.split(" ");

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".word", {
      y: 40,
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: container, dependencies: [words] });

  return (
    <section
      ref={container}
      className="min-h-[90vh] flex items-center justify-center px-10"
    >
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
            clipPath: "polygon(0 0,100% 0,100% 42%,0 42%,0 58%,100% 58%,100% 100%,0 100%)",
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
      <div
        className="
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
        "
      >
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
          {sections.map((section) => (
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
              <span className="relative z-10">{section.title}</span>
            </button>
          ))}
        </div>

        <div className="max-w-3xl">
          <h1
            className="
                    text-6xl
                    md:text-7xl
                    lg:text-8xl
                    font-black
                    text-black
                    leading-none
                "
          >
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
  );
}
