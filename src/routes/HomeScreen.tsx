import FrutigerBar from "../components/FrutigerBar";

const bubbles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 40 + Math.random() * 80,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 6,
}));

const HomeScreen = () => {
  return (
    <div className="relative min-h-screen overflow-hidden
                    bg-gradient-to-br from-[#c6e8f5] via-[#e8f4f8] to-[#f0f9ff]">

      {/* floating bubbles background */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full animate-float
                       bg-gradient-to-br from-white/30 to-white/5
                       border border-white/20"
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

      {/* subtle light rays */}
      <div className="absolute inset-0 pointer-events-none
                      bg-[radial-gradient(ellipse_at_top_right,_rgba(125,211,192,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none
                      bg-[radial-gradient(ellipse_at_bottom_left,_rgba(58,183,191,0.1)_0%,_transparent_50%)]" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* hero section */}
        <div className="glass rounded-3xl p-10 md:p-14 mb-12 text-center max-w-2xl w-full frutiger-glow">
          <div className="shine inline-block mb-6">
            <div className="w-24 h-24 mx-auto rounded-full
                            bg-gradient-to-br from-[#7dd3c0] to-[#3ab7bf]
                            shadow-lg flex items-center justify-center
                            text-4xl select-none border-2 border-white/30
                            shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]">
              <span className="drop-shadow-lg">T</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-3
                         tracking-tight">
            Tony Theryx
          </h1>
          <p className="text-white/80 text-base md:text-lg font-light
                        drop-shadow max-w-md mx-auto leading-relaxed">
            Designer &amp; Developer — crafting digital experiences
            with a touch of nostalgia.
          </p>

          <div className="mt-2 h-1 w-20 mx-auto rounded-full
                          bg-gradient-to-r from-white/40 via-white/60 to-white/40" />
        </div>

        {/* frutiger bar */}
        <FrutigerBar />
      </div>

      {/* keyframes for floating animation */}
      <style>{`
        @keyframes float {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          10%  { opacity: 0.6; }
          50%  { transform: translateY(-80vh) scale(1.1); opacity: 0.4; }
          90%  { opacity: 0.2; }
          100% { transform: translateY(-110vh) scale(0.8); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeScreen;
