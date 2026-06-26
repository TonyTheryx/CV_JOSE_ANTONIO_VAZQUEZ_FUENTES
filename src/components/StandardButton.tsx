
  interface StandardButtonProps {
       color: "blue" | "red" | "green" | "yellow";
      onClick?: () => void;
  }
  const colors = {
  blue: "via-blue-700 ",
  red: "via-red-700 ",
  green: "via-green-700 ",
  yellow: "via-yellow-700 ",
};
  export default function StandardButton({
      color,
      onClick
  }: StandardButtonProps) {
    return (
      
      <button className={`align-middle
       bg-linear-to-b from-white to-white ${colors[color]}
       hover:to-purple-600
        rounded-full
         text-white
          font-bold
           py-2 px-4`}
            onClick={onClick}>
        Click me!
      </button>
      
    );
  };