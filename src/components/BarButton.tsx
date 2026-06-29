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
            className="bg-linear-to-b from-teal-400 to-gray-600/30 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
        <ThreeLines />
        </button>
    );
}