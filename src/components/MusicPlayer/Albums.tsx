import AlbumCard from "./AlbumCard";
import { albums } from "./albums.ts";

interface AlbumsProps{
    onPlayAlbum:(index:number)=>void;
}

export default function Albums({onPlayAlbum}:AlbumsProps){

    return(

        <div className="grid grid-cols-4 gap-8">

            {

                albums.map((album,index)=>(

                    <AlbumCard

                        key={album.id}

                        image={album.image}

                        title={album.title}

                        year={album.year}

                        description={album.description}

                        onPlay={()=>onPlayAlbum(index)}

                    />

                ))

            }

        </div>

    );

}