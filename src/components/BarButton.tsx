import ThreeLines from "./SVG/ThreeLines";

interface BarButtonProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BarButton({
    isVisible,
    setIsVisible
}: BarButtonProps) {

    return (
        <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-linear-to-b  from-white via-purple-600/100 to-white text-white px-4 py-2 rounded-full hover:bg-white"
        >
        <ThreeLines />
        </button>
    );
}