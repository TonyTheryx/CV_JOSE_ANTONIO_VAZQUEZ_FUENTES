export default function PDF() {
  return (
    <section
      className="
      mx-auto
        w-[92%]
        max-w-7xl
        rounded-[45px]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        shadow-2xl

        p-14
        space-y-16
        ">
    <section className="
rounded-[40px]
bg-white/10
backdrop-blur-xl
border
border-white/20
p-14
">

    <h2 className="text-6xl font-black">
        Electronics Laboratory
    </h2>

    <p className="
    mt-8
    text-xl
    leading-10
    max-w-5xl
    ">

        Aquí documento todos los proyectos electrónicos que he desarrollado.
        Desde circuitos sencillos hasta sistemas con microcontroladores,
        sensores y automatización.

    </p>

</section>

<div className="
grid
grid-cols-4
gap-8
">
    <div
className="
rounded-[30px]
overflow-hidden
bg-white/15
backdrop-blur-xl
border
border-white/20
shadow-xl
hover:scale-105
transition
duration-300
">

    <img
        src="/Electronics/riego.jpg"
        className="
        w-full
        aspect-square
        object-cover
        "
    />

    <div className="p-6">

        <h3 className="text-2xl font-bold">
            Automatic Irrigation
        </h3>

        <p className="text-cyan-500 mt-2">
            August 2026
        </p>

        <div className="flex flex-wrap gap-2 mt-4">

            <span className="px-3 py-1 rounded-full bg-cyan-400/20">
                Arduino
            </span>

            <span className="px-3 py-1 rounded-full bg-cyan-400/20">
                Sensor
            </span>

        </div>

        <p className="mt-5 leading-7">

            Sistema automático que mide la humedad del suelo
            y activa una bomba de agua cuando es necesario.

        </p>

        <button className="
        mt-6
        w-full
        rounded-full
        bg-cyan-400
        py-3
        text-white
        ">
            View Project
        </button>

    </div>

</div>
</div>

</section>
  );
}