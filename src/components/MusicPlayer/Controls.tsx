interface ControlsProps {
    onPlay: () => void;
    onPause: () => void;
    onStop: () => void;
    onNext: () => void;
    onPrevious: () => void;
}
;
export default function Controls({
    onPlay,
    onPause,
    onStop,
    onNext,
    onPrevious,
}: ControlsProps) {
    
const buttonStyle = `
    w-20
    h-24
    rounded
    text-white
    text-2xl
    flex
    items-center
    justify-center
    shadow-lg
    transition-all
    duration-150

    active:translate-y-[4px]
    active:shadow-inner

    border
    border-[#222]

    bg-[#3d3d42]
`;
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">

            <button className={buttonStyle} onClick={onPrevious}
             style={{
                backgroundImage: `
                    repeating-linear-gradient(
                        to bottom,
                        rgba(255,255,255,.12) 0px,
                        rgba(255,255,255,.12) 1px,
                        transparent 1px,
                        transparent 4px
                    ),
                    linear-gradient(
                        to bottom,
                        #505056,
                        #3d3d42 45%,
                        #2c2c2f
                    )
                `
            }}
            >⏮</button>

            <button className={buttonStyle} onClick={onPlay}>▶</button>

            <button className={buttonStyle} onClick={onPause}>⏸</button>

            <button className={buttonStyle} onClick={onStop}>⏹</button>

            <button className={buttonStyle} onClick={onNext}>⏭</button>

        </div>
    );
}