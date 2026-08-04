const buttons=[
"⏮",
"▶",
"⏸",
"⏹",
"⏭"
];

export default function Controls(){

    return(

        <div
            className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            flex
            gap-1
            "
        >

            {

                buttons.map((b)=>(

                    <button

                        key={b}

                        className="
                        w-20
                        h-24
                        bg-[#3d3d42]
                        text-white
                        active:translate-y-2
                        active:shadow-inner
                        rounded
                        transition-all
                        "

                    >

                        {b}

                    </button>

                ))

            }

        </div>

    )

}