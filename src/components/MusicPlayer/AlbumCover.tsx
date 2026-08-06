interface AlbumCoverProps {
    src: string;
    title: string;
}

export default function AlbumCover({ src, title }: AlbumCoverProps) {
    return (
        <div className="group">
            <img
                src={src}
                alt={title}
                className="
                w-full
                aspect-square
                object-cover
                rounded-xl
                transition
                duration-300
                group-hover:scale-105
                "
            />

            <p className="mt-2 text-center text-sm">
                {title}
            </p>
        </div>
    );
}