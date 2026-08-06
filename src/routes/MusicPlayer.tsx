import MemphisBackground from "../components/MusicPlayer/MemphisBackground";
import Introduction from "../components/MusicPlayer/Introduction";
import MusicPlayerSection from "../components/MusicPlayer/MusicPlayerSection";
import Albums from "../components/MusicPlayer/Albums.tsx";
import { useState } from "react";

export default function MusicPlayer() {
const [albumIndex,setAlbumIndex]=useState(0);
    const playAlbum=(index:number)=>{

    setAlbumIndex(index);

}
    return (
<div className="bg-blue-400 relative min-h-screen">

<MemphisBackground/>
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
flex
flex-col
items-center
"
>
    {/* Introduccion */}
    <Introduction/>


    {/* Music Player */}
    <MusicPlayerSection/>
    {/*Catalog*/}
    <Albums onPlayAlbum={playAlbum}/>

    </section>
    </div>
    );


}
