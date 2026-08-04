interface AlbumCardProps {
    image: string;
    title: string;
    year: string;
    description: string;
}

export default function AlbumCard({ image, title, year, description }: AlbumCardProps) {
    return (
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
                src={image}
                className="
                aspect-square
                object-cover
                w-60 h-60
                "
            />

            <div className="p-6">

                <h3 className="text-2xl font-bold">
                    {title}
                </h3>

                <p className="text-cyan-500 mt-2">
                    {year}
                </p>

                <p className="mt-5 leading-7">
                    {description}
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
    );
}
