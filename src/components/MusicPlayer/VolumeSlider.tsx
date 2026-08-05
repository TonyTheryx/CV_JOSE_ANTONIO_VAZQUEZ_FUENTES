interface VolumeSliderProps {
    onVolumeChange: (value: number) => void;
}

export default function VolumeSlider({ onVolumeChange }: VolumeSliderProps) {

    return(

        <div
            className="
            absolute
            right-8
            top-[145px]
            w-[55px]
            h-[200px]
            rounded
            bg-[#44484f]
            flex
            justify-center
            "
        >

            <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="1"
            
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            style={{
                 writingMode: "vertical-lr",
             }}
        />

        </div>

    )

}