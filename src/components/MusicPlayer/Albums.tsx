import AlbumCard from "./AlbumCard";

const albums = [
    {
        image: "src\\components\\MusicPlayer\\Images\\Whispers of Something.png",
        title: "Whispers Of Something",
        year: "2026",
        description: "My First album inspired by electronic music and retro music of 00's, 90's and 80's music",
    },
];

export default function Albums() {
    return (
        <div
            className="
            grid
            grid-cols-4
            gap-8
            "
        >
            {albums.map((album) => (
                <AlbumCard
                    key={album.title}
                    image={album.image}
                    title={album.title}
                    year={album.year}
                    description={album.description}
                />
            ))}
        </div>
    );
}
