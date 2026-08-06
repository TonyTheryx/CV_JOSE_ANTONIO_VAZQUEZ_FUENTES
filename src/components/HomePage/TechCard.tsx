import type { ReactNode } from "react";
import Water from "./Images/Water.jpg";

type TechCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

export default function TechCard({
    icon,
    title,
    description,
}: TechCardProps) {
    return (
        <div
            className="
            flex
            items-center
            gap-6
            rounded-[28px]
            bg-cyan-300
            backdrop-blur-xl
            border
            border-white/20
            p-6
            transition
            duration-300
            hover:scale-[1.02]
            hover:bg-white/25
    [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]
            "
            style={{
        backgroundImage: `url(${Water})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    }}

        >
            {/* Ícono */}

            <div
                className="
                shrink-0
                w-28
                h-28
                rounded-2xl
                bg-cyan-300/50
                flex
                items-center
                justify-center
                
                "
            >
                {icon}
            </div>

            {/* Texto */}

            <div
            className="
            flex-col
            
            ">
                <div className=" bg-cyan-600/50 rounded-[28px]" >
                <h3
                    className="
                    text-2xl
                    font-bold
                    text-cyan-100
                    
                    "
                >
                    {title}
                </h3>
                </div>

                <div className=" bg-cyan-600/50 rounded-[28px]" >
                <p
                    className="
                    mt-3
                    text-lg
                    leading-7
                    font-bold
                    text-cyan-100
                    size-lg
                    flex
                    pr-20
                    "
                    
                >
                    {description}
                </p>
                </div>

            </div>

        </div>
    );
}