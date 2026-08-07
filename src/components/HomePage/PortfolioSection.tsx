import PortfolioCarousel from "./PortFolioCarousel";
import TeamWorksCarousel from "./TeamWorksCarousel";
import Bunny from "./Bunny";

export default function PortfolioSection() {
  return (
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
            <div className="
            h-50
            pl-50
            "> 
            <Bunny/>
            </div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-6">
              Portfolio
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              Works
            </h2>

            <p className="mt-10 text-xl leading-10 text-slate-600">
              I am a multidisciplinary artist and developer, I like to create
              diferent types of things and experiences, but it's kind of
              dificult trying to learn about different areas at the same time,
              so I am trying to focus on a few areas that I really like and want
              to master, but I also want to keep learning about other areas that
              I find interesting.
            </p>

            <p className="mt-6 text-xl leading-10 text-slate-600 gap-5">
              I have worked in few works, but here there are the most important
              works that I ever worked.
            </p>
          </div>

          {/* Imagen */}
          {/* Individual Works */}
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
            
            <PortfolioCarousel />
          </div>

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
            <TeamWorksCarousel />
          </div>
           {/* Team Works */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              Team works
            </h2>

            <p className="mt-6 text-xl leading-10 text-slate-600 gap-5">
            I'm going to talk about only 1 proyect that I did in teamwork (Mi Canasta), I work in this proyect,but too many people also participated too, but I think it was a good project to talk in this website.
            </p>
          </div>


          {/* The end */}
          <div>
            <p className="mt-6 text-xl leading-10 text-slate-600 gap-5">
              I have more art works, but I save those in my social media, that
              you could find at the end of this page.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
