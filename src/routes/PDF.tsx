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
        "
    >   
    <section className="
rounded-[40px]
bg-white/10
backdrop-blur-xl
border
border-white/20
p-14
">

    <h2 className="text-6xl font-black">
        Document Library
    </h2>

    <p className="mt-8 text-xl leading-10 max-w-4xl">

        Aquí podrás encontrar investigaciones,
        documentación técnica, manuales,
        proyectos universitarios,
        artículos y cualquier PDF que
        haya desarrollado durante mi aprendizaje.

    </p>
</section>
{/*Catalog of PDFs*/}
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
transition
hover:scale-105
duration-300
">
</div>

    {/* Imagen del PDF */}

    <img
        src="/PDFS/pdf1.jpg"
        className="
        w-full
        aspect-[3/4]
        object-cover
        "
    />

    <div className="p-6">

        <h3 className="text-2xl font-bold">
            Blender Hair Cards
        </h3>

        <p className="mt-2 text-cyan-500">
            15 July 2026
        </p>

        <p className="mt-5 leading-7">

            Investigación sobre técnicas
            para crear cabello mediante
            Hair Cards en Blender.

        </p>

        <div className="flex gap-3 mt-6">

            <button
            className="
            flex-1
            rounded-full
            bg-cyan-400
            text-white
            py-2
            hover:bg-cyan-300
            transition
            ">

                Open

            </button>

            <button
            className="
            flex-1
            rounded-full
            bg-white/20
            text-black
            py-2
            hover:bg-white/30
            transition
            ">

                Download

            </button>

        </div>

    </div>

</div>
</section>
  );
}