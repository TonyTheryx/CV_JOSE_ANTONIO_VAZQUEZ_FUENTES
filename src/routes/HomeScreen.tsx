import FrutigerBar from "../components/FrutigerBar";
import "../CSS/HomeScreen.css";
import WarningBox1 from "../components/warningBox1";
import WarningBox from "../components/warningBox";
import React from "react";
import BarButton from '../components/BarButton';
import Tx from "../components/SVG/Tx";    

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

          <button className="hero-button">
            Enter
          </button>

        </section>

        

      </main>

    </div>
  );
}