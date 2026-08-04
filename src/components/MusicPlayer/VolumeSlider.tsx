export default function VolumeSlider(){

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

                orient="vertical"

                className="
                rotate-90
                w-[170px]
                mt-16
                "

            />

        </div>

    )

}