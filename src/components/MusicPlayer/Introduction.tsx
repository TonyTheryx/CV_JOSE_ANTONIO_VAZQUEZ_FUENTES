import MusicGenreCard from "./MusicGenreCard";
import AlbumCover from "./AlbumCover";

export default function Introduction() {
    return (
        <section
            className="
            w-full
            rounded-[40px]
            bg-blue/10
            backdrop-blur-xl
            border
            border-white/20
            p-14
            "
        >
            <h2 className="text-6xl font-black">
                Music
            </h2>

            <h3 className="text-4xl font-black mt-3">
                Introduction
            </h3>

            <p className="mt-8 text-xl leading-10 max-w-5xl">
                Music has been an important part of my life since I was a child.
                I enjoy exploring many different genres, from electronic music
                and synthesizer-driven sounds to jazz, classical music and rock.
                Below are some of my favorite genres together with albums and
                artists that inspired me.
            </p>

            <div className="mt-16 flex flex-col gap-10">

                <MusicGenreCard
    banner="/genres/electronic.jpg"
    title="Electronic"
    description="Electronic music is one of my favorite genres. I enjoy everything from ambient soundscapes to dance music and classic synthesizer-based compositions."

    artists={[
        "Kraftwerk",
        "Jean-Michel Jarre",
        "Vangelis",
        "Yellow Magic Orchestra",
        "Daft Punk"
    ]}
>

    <AlbumCover src="/albums/autobahn.jpg" title="Autobahn" />
    <AlbumCover src="/albums/equinoxe.jpg" title="Équinoxe" />
    <AlbumCover src="/albums/discovery.jpg" title="Discovery" />
    <AlbumCover src="/albums/blade-runner.jpg" title="Blade Runner" />

</MusicGenreCard>

            </div>
        </section>
    );
}