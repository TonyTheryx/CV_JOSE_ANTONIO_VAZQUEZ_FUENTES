import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function WelcomeBox() {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 100,
      scale: 1.2,
      duration: 1,
    });
  }, { scope: boxRef, dependencies: [] });

  return (
    <div className="box" ref={boxRef}>
      Welcome
    </div>
  );
}
