import React, { useState } from "react";
import "./MusicPlayer.css";
import Speaker from "./Speaker";
import Cassette from "./Cassette";
import VolumeSlider from "./VolumeSlider";
import Controls from "./Controls";  

export default function MusicPlayerSection() {
    const [playing, setPlaying] = useState(false);

    return (
          <div
            className="
            relative
            w-[700px]
            h-[640px]
            rounded-[45px]
            bg-[#ece6d7]
            shadow-2xl
            border-[6px]
            border-[#d4cebf]
            overflow-hidden
            "
        >

            <Speaker/>

            <Cassette/>

            <VolumeSlider/>

            <Controls/>

        </div>
    );
}