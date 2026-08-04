export default function Speaker(){

    const holes=[];

    for(let i=0;i<220;i++){

        holes.push(

            <div
                key={i}
                className="
                w-[7px]
                h-[7px]
                rounded-full
                bg-[#5a5449]
                "
            />

        )

    }

    return(

        <div
            className="
            absolute
            left-1/2
            -translate-x-1/2
            top-6
            w-[540px]
            grid
            grid-cols-20
            gap-[7px]
            "
        >

            {holes}

        </div>

    )

}