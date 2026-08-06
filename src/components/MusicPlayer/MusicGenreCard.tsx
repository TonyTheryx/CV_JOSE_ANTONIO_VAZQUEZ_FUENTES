interface MusicGenreCardProps {
    banner: string;
    title: string;
    description: string;
    artists: string[];
    children: React.ReactNode;
}

export default function MusicGenreCard({
    banner, 
    title,
    description,
    artists,
    children
}: MusicGenreCardProps) {
    return (
        <article className="rounded-[35px] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl">

    {/* Banner */}
    <img
        src={banner}
        className="w-full h-60 object-cover"
    />

    {/* Title */}
    <div className="p-8">

        <h2 className="text-5xl font-black">
            {title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-white/80">
            {description}
        </p>

    </div>

    {/* Albums */}

    <div className="border-t border-white/10 p-8">

        <h3 className="text-2xl font-bold mb-6">
            Featured Albums
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {children}
        </div>

    </div>

    {/* Artists */}

    <div className="border-t border-white/10 p-8">

        <h3 className="text-2xl font-bold mb-6">
            Featured Artists
        </h3>

        <div className="flex flex-wrap gap-3">

            {artists.map((artist) => (
                <span
                    key={artist}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/30
                    "
                >
                    {artist}
                </span>
            ))}

        </div>

    </div>

</article>
    );
}