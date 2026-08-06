import { div } from "three/src/nodes/math/OperatorNode.js";
import BunnyImage from "./images/Bunny.png";
export default function Bunny() {
    return (
    <div className="
    items-center
    flex
    text-center
    justify-center
    bg-amber-500
    [clip-path:circle(45%)]
    gap-0
    ">

        
        <div className="flex flex-col
        items-center
        justify-center gap-10
    [clip-path:polygon(20%_0,0_20%,30%_50%,0_80%,20%_100%,50%_70%,80%_100%,_100%_80%,70%_50%,100%_20%,80%_0%,50%_30%)]
            w-[200px]
            h-[200px]
            "
            style={{
                backgroundImage: `url(${BunnyImage})`,
                backgroundSize: "cover",
            }}
           > 
        </div>

        <div className="
        h-10
        w-10
        bg-white
        [clip-path:circle(45%)]
        "
        >   
        </div>
        <div className="
        h-7
        w-7
        bg-white
        [clip-path:circle(45%)]
        "
        >   
        </div>
        

        </div>
    );
}