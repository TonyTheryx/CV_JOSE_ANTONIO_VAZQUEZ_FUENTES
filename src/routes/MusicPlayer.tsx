import MemphisBackground from "../components/MusicPlayer/MemphisBackground";
import Introduction from "../components/MusicPlayer/Introduction";
import MusicPlayerSection from "../components/MusicPlayer/MusicPlayerSection";
import Albums from "../components/MusicPlayer/Albums";

export default function MusicPlayer() {
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
"
>
        {/* Introduccion */}
    <Introduction/>


    {/* Music Player */}
    <MusicPlayerSection/>
    {/*Catalog*/}
    <Albums/>

</section>
</div>
    );


}
