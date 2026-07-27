
export default function MusicPlayer() {
    return (
<div className="
bg-blue-300
min-h-screen
">
<section
className="
mx-auto
w-[92%]
max-w-7xl
rounded-[45px]
bg-white
backdrop-blur-xl
border
border-white/20
shadow-2xl
p-14
space-y-16
"
>
        {/* Introduccion */}
    <section className="
w-full
rounded-[40px]
bg-blue/10
backdrop-blur-xl
border
border-white/20
p-14
">

    <h2 className="
    text-6xl
    font-black
    ">
        Music
    </h2>

    <h3 className="
    text-4xl
    font-black
    ">
        Introduction
    </h3>

    <p className="
    mt-10
    text-xl
    leading-10
    max-w-4xl
    justify-between
    ">

        I'm going to be honest when I say that music is something very important to me, it have been a part of my whole life,
        I like different genres of music:
        <ul>
            <li>• Electronic and their subgenres (Ambient, House, Techno)</li>
            <li>• Pop</li>
            <li>• Rock and all the subgenres (SpaceRock, Psychodelic Rock, Hard Rock, Alternative Rock, Rock in spanish, Surf Rock).</li>
            <li>• Jazz</li>
            <li>• Blues and Rhythms</li>
            <li>• Classical</li>
            <li>• Soundtrack (films or video games)</li>
            <li>• City Pop/J-Pop</li>
            <li>• Rap</li>
            <li>• Reggae</li>
            <li>• Synth-pop</li>
            <li>• Synthwave</li>
            <li>• Country</li>
            <li>• K-Pop</li>
            
        </ul>
        I love those kind of genres I have tons of those kind of music in my playlists, and
        I'm not a big fan of latin music, or music from my country, but I like some songs from those genres, but not all of them, for example:
        <ul>
            <li>• Bolero</li>
            <li>• Mariachi</li>
        </ul>
        If I listen those kind of music I can't complain with them.
    </p>

</section>


{/* Music Player */}
<div className="
rounded-[35px]
bg-white/20
backdrop-blur-xl
border
border-white/20
p-10
flex
gap-10
">
    </div>
{/*Catalog*/}
<div
className="
grid
grid-cols-4
gap-8
"
>  
</div>

{/* Card */}

<div
className="
rounded-[28px]
overflow-hidden
bg-white/15
backdrop-blur-xl
border
border-white/20
transition
hover:scale-105
duration-300
"
>

    <img
        src="/Albums/album1.jpg"
        className="
        w-full
        aspect-square
        object-cover
        "
    />

    <div className="p-6">

        <h3 className="text-2xl font-bold">
            Whispers Of Something
        </h3>

        <p className="text-cyan-500 mt-2">
            2026
        </p>

        <p className="mt-5 leading-7">

            Primer álbum inspirado en la
            música electrónica de los años 70 y
            el City Pop japonés.

        </p>

        <button className="
        mt-6
        px-5
        py-2
        rounded-full
        bg-cyan-400
        text-white
        ">

            Escuchar

        </button>

    </div>

</div>
</section>
</div>
    );


}
