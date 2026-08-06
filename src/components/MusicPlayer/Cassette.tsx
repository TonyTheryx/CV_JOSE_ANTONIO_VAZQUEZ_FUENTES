interface CassetteProps {
    name: string;
}
export default function Cassette({ name }: CassetteProps) {

    return(

        <div
            className="
            absolute
            left-1/2
            -translate-x-1/2
            top-[120px]
            w-[470px]
            h-[285px]
            rounded-md
            bg-[#b41e15]
            border-[8px]
            border-[#42190f]
            shadow-inner
            "
        >
        <div>
            <div
                className="
                absolute
                left-10
                top-16
                w-[95px]
                h-[95px]
                rounded-full
                border-8
                border-black
                "
            />

            <div
                className="
                absolute
                right-10
                top-16
                w-[95px]
                h-[95px]
                rounded-full
                border-8
                border-black
                "
            />

            <div
                className="
                absolute
                left-1/2
                -translate-x-1/2
                top-[78px]
                w-[120px]
                h-[70px]
                bg-black/40
                rounded
                "
            />

            

            {/* Nombre de la canción*/}
            <div
                className="
                absolute
                left-1/2
                -translate-x-1/2
                bg-[#5b84ff]
                text-white
                text-center
                text-lg
                font-bold
                w-[200px]
                h-[30px]
                "
                >
                
                    {name}
            </div>
            </div>
            
        </div>

    );

}