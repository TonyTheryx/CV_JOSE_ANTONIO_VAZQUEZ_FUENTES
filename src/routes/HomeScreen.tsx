import FrutigerBar from "../components/FrutigerBar";
import "../CSS/HomeScreen.css";
import WarningBox from "../components/warningBox";

const bubbles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 40 + Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 10 + Math.random() * 10,
}));

export default function HomeScreen() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sky">
      <FrutigerBar />
      <WarningBox message="This is a warning message!" />
      

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
      <div className="absolute bottom-0 left-0 right-0 grass" />

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