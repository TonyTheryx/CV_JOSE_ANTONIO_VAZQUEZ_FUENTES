import React, {useRef, useState } from "react";
import "./MusicPlayer.css";
import Speaker from "./Speaker";
import Cassette from "./Cassette";
import VolumeSlider from "./VolumeSlider";
import Controls from "./Controls";  
import { albums } from "./albums";


export default function MusicPlayerSection() {
    const volumeSliderRef = useRef<HTMLInputElement>(null);

    const audioRef = useRef<HTMLAudioElement>(null);    
    const [playing, setPlaying] = useState(false);
    const [albumIndex, setAlbumIndex] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const currentTrack =
    albums[albumIndex].tracks[trackIndex];

    /* Play */
    const onPlay = () => {
        setPlaying(true);
        audioRef.current?.play();
    };
    /*Parar la canción*/
    const onStop = () => {
        setPlaying(false);
        audioRef.current?.pause();
    };
    /*Reiniciar la canción*/
    const onReset = () => {
        audioRef.current?.load();
    };

    /* Cambio de volumen */
    const volumeChangeHandler = (value: number) => {
         if (audioRef.current) {
        audioRef.current.volume = value;
    }
    };

     /* Cambio de cancion siguiente*/
    const nextSong = () => {
    if (trackIndex < albums[albumIndex].tracks.length - 1) {
        setTrackIndex(trackIndex + 1);
    }
    };

    /* Cambio de cancion anterior */
    const previousSong = () => {
        if (trackIndex > 0) {
            setTrackIndex(trackIndex - 1);
        }
    };

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

            <VolumeSlider onVolumeChange={volumeChangeHandler} />

            <Controls
                onPlay={() => onPlay()}
                onPause={() => onStop()}
                onStop={() => onReset()}
                onNext={() => nextSong()}
                onPrevious={() => previousSong()}
            />

            <audio
                ref={audioRef}
                src={currentTrack.file}
            
            />          

        </div>
    );
}