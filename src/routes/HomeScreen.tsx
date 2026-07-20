import FrutigerBar from "../components/FrutigerBar";
import "../CSS/HomeScreen.css";
import WarningBox1 from "../components/warningBox1";
import WarningBox from "../components/warningBox";
import React from "react";
import BarButton from '../components/BarButton';
import Tx from "../components/SVG/Tx";    
import gsap from "gsap";

const bubbles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 40 + Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 10 + Math.random() * 10,
}));

export default function HomeScreen() {

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

      {/* Césped */}
      <div className="absolute bottom-0 left-0 right-0 grass">
        <Tx/>
      </div>


      {/* Contenido */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">

        <section className="hero-card">

          <div className="logo-circle">
            T
          </div>

          <h1>Tony Theryx</h1>

          <p>
            Designer & Developer
            <br />
            Crafting digital experiences.
          </p>
          <br />
          {/** 
          <p>
            Hello! I'm Tony Theryx, and welcome to the TheryxPage, 
            that is a special area where I can share all my projects, 
            but also Here I have some funny and aesthetic website places that I really want to share with you,
            it's I kind of museum, and also portfolio, so enjoy it.
          </p>
*/}
          <button className="hero-button">
            Enter
          </button>

        </section>

      {/* Secciones largas de información */}
      <section className="info-sections">
        <article className="info-card">
          <div className="info-card-gloss"></div>
          <h2>About Me</h2>
          <p>
            Here you can write a long introduction about yourself, your interests,
            your goals, and what inspires you as a developer and designer.
          </p>
        </article>

        <article className="info-card">
          <div className="info-card-gloss"></div>
          <h2>My Projects</h2>
          <p>
            Describe your video games, web projects, 3D models, and any creative work
            you want to showcase in your portfolio.
          </p>
        </article>

        <article className="info-card">
          <div className="info-card-gloss"></div>
          <h2>Skills</h2>
          <p>
            Mention your knowledge in React, Blender, game development, design,
            programming, and other abilities you have learned.
          </p>
        </article>

        <article className="info-card">
          <div className="info-card-gloss"></div>
          <h2>Music &amp; Inspiration</h2>
          <p>
            Share your favorite artists, aesthetic inspirations, and the creative
            influences that shape your work.
          </p>
        </article>

        <article className="info-card">
          <div className="info-card-gloss"></div>
          <h2>Contact</h2>
          <p>
            Add your email, LinkedIn, GitHub, and social media links so people can
            reach you easily.
          </p>
        </article>
      </section>
      </main>

    </div>
  );
}