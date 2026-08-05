import { useRef, useState } from "react";
import { albums } from "./albums";

export default function AudioPlayer() {

    const audioRef = useRef<HTMLAudioElement>(null);

    const [albumIndex, setAlbumIndex] = useState(0);

    const [trackIndex, setTrackIndex] = useState(0);

    const album = albums[albumIndex];

    const track = album.tracks[trackIndex];

    function play() {

        audioRef.current?.play();

    }

    function pause() {

        audioRef.current?.pause();

    }

    function next() {

        if(trackIndex < album.tracks.length-1){

            setTrackIndex(trackIndex+1);

        }

    }

    function previous(){

        if(trackIndex>0){

            setTrackIndex(trackIndex-1);

        }

    }

    return(

        <>

            <audio

                ref={audioRef}

                src={track.file}

            />

        </>

    );

}