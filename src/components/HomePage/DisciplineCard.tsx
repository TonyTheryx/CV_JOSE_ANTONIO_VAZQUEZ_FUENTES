import type { ReactNode } from "react";

interface DisciplineCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function DisciplineCard({
  title,
  description,
  icon,
}: DisciplineCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 text-3xl shadow-md">
        {icon}
      </div>

      <h3 className="mt-8 text-3xl font-bold">{title}</h3>

      <p className="mt-4 text-lg text-slate-600">
        {description}
      </p>

      <button className="mt-8 text-cyan-500 hover:underline">
        View More
      </button>
    </div>
  );
}