import { useState } from "react";
import FrutigerBar from "./FrutigerBar";
import BarButton from "./BarButton";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutFrutiger({ children }: LayoutProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen relative">
      {/* Barra y botón */}
      <div className="fixed top-5 left-5 z-50 flex items-start gap-3">
        <BarButton
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />

        <FrutigerBar isVisible={isVisible} />
      </div>

      {/* Contenido */}
      <main>
        {children}
      </main>
    </div>
  );
}