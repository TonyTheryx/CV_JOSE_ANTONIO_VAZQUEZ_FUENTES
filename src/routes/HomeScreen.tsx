import FrutigerBar from "../components/FrutigerBar";
import "../CSS/HomeScreen.css";
import WarningBox1 from "../components/warningBox1";
import WarningBox from "../components/warningBox";
import React, { useRef } from "react";
import BarButton from '../components/BarButton';
import Tx from "../components/SVG/Tx";    
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaYoutube, FaInstagram, FaTiktok, FaCircle, FaLeaf, FaRegCircle, FaMagic, FaPinterest } from "react-icons/fa";
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


  // Animation for the main text
  const container = useRef(null);
  const text = "Hello My name is Joseph TonyTheryx, I am an artist and a developer, I like to design nostalgic and diferent experiences.";
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


  const [isFrutigerBarVisible, setIsFrutigerBarVisible] = React.useState(true);
  return (
    <div className="relative min-h-screen overflow-hidden bg-sky">
      <FrutigerBar isVisible={isFrutigerBarVisible} />
      <WarningBox1 message="This is a warning message!" />
      <WarningBox message="This is another warning message!" />
      
      <BarButton
      isVisible={isFrutigerBarVisible}
      setIsVisible={setIsFrutigerBarVisible}
    />
      
      {/* Cielo */}
      <div className="absolute" />

      
      <div className="absolute" />

      {/* Burbujas */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble animate-float"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              bottom: "-10%",
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>


      {/* Contenido */}
     <main className="relative z-10">
        <div className="box" ref={boxRef}> 
            Welcome
        </div>
    {/* Principal text */}
    <section 
    ref={container}
    className="min-h-[90vh] flex items-center justify-center px-10">

        <div className="
            w-full
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

                <button className="
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
                ">
                    Ver Portafolio
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
    <section className="
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
                    Portfoilio
                </p>

                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                    Visión Orgánica y Futurista
                </h2>

                <p className="mt-10 text-xl leading-10 text-slate-600">
                   
                </p>

            </div>

            {/* Imagen */}
            <div className="flex justify-center">

                <img
                    src="/Images/crystal.png" // cambia la ruta por tu imagen
                    alt="Cristales"
                    className="
                        w-full
                        max-w-2xl
                        rounded-[2.5rem]
                        object-cover
                        shadow-2xl
                    "
                />

            </div>

        </div>

    </section>

    </section>


        <section className="w-full py-24 px-8">

    <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-slate-900 mb-20">
            Habilities and Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            <div className="flex flex-col items-center text-center">

                <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 text-3xl shadow-md">
                    <FaRegCircle />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                    Design
                </h3>

                <p className="mt-4 text-lg text-slate-600">
                    I like to create different types of retro designs.
                </p>

                <button className="mt-8 text-cyan-500 hover:underline">
                    Ver más
                </button>

            </div>

            <div className="flex flex-col items-center text-center">

                <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 text-3xl shadow-md">
                    <FaMagic />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                    Interactividad
                </h3>

                <p className="mt-4 text-lg text-slate-600">
                    Experiencias dinámicas que responden a cada interacción con
                    precisión y elegancia.
                </p>

                <button className="mt-8 text-cyan-500 hover:underline">
                    Ver más
                </button>

            </div>

            <div className="flex flex-col items-center text-center">

                <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 text-3xl shadow-md">
                    <FaLeaf />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                    Organic-Tech
                </h3>

                <p className="mt-4 text-lg text-slate-600">
                    La unión entre naturaleza y tecnología para crear
                    experiencias únicas.
                </p>

                <button className="mt-8 text-cyan-500 hover:underline">
                    Ver más
                </button>

            </div>

        </div>

    </div>

</section>

    {/* FOOTER */}
    <footer className="
         bg-linear-to-b from-gray-100/40 via-gray-600/100 to-gray-100/100
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