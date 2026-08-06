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
 
 const blackbackgroundStyle = `repeating-linear-gradient(
                        to bottom,
                        rgba(255,255,255,.12) 0px,
                        rgba(255,255,255,.12) 1px,
                        transparent 10px,
                        transparent 10px
                    ),
                    linear-gradient(
                        to bottom,
                        #505056,
                        #3d3d42 45%,
                        #2c2c2f
                    )`


const redbackgroundStyle = `repeating-linear-gradient(
                        to bottom,
                        rgba(100,50,50,.12) 0px,
                        rgba(100,50,50,.12) 1px,
                        transparent 10px,
                        transparent 10px
                    ),
                    linear-gradient(
                        to bottom,
                        #ff4c4c,
                        #ff4c4c 45%,
                        #ff4c4c
                    )
                        `


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

`;
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">

            <button className={buttonStyle} onClick={onPrevious}
             style={{
                backgroundImage: blackbackgroundStyle
            }}
            >⏮</button>

            <button className={buttonStyle} style={{ backgroundImage: redbackgroundStyle }} onClick={onPlay}>▶</button>

            <button className={buttonStyle} style={{ backgroundImage: blackbackgroundStyle }} onClick={onPause}>⏸</button>

            <button className={buttonStyle} style={{ backgroundImage: blackbackgroundStyle }} onClick={onStop}>⏹</button>

            <button className={buttonStyle} style={{ backgroundImage: blackbackgroundStyle }} onClick={onNext}>⏭</button>

        </div>
    );
}