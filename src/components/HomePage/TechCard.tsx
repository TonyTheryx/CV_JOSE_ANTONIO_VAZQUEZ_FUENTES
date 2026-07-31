import { ReactNode } from "react";

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
            "
        >
            {/* Ícono */}

            <div
                className="
                shrink-0
                w-28
                h-28
                rounded-2xl
                bg-white/20
                flex
                items-center
                justify-center
                "
            >
                {icon}
            </div>

            {/* Texto */}

            <div>

                <h3
                    className="
                    text-2xl
                    font-bold
                    text-cyan-700
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                    mt-3
                    text-lg
                    leading-7
                    "
                >
                    {description}
                </p>

            </div>

        </div>
    );
}