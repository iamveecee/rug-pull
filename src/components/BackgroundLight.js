import React, { useEffect } from "react";
import { ReactComponent as StringLight } from "../assets/bgLight.svg";
import { gsap } from "gsap";

const BackgroundLight = () => {
    const lightAction = (e) => {
        //console.log(e,e.composedPath());
        const path = e.path || e.composedPath();
        const imagePath = path[1];

        if (!imagePath.classList.contains("bg-effects")) return false;

        switch (true) {
            case imagePath.classList.contains("bg-bulb"):
                console.log("Bulb");
                break;
            case imagePath.classList.contains("bg-bulb-string"):
                e.currentTarget.classList.toggle('bulb-active')
                console.log("Bulb-string");
                gsap.fromTo(imagePath,1, {scaleY: 1.1},{scaleY: 1, ease: "power1.out" } );
                document.body.classList.toggle('bg-light-on');
                //path[3].querySelector('.bg-light-flyer').style.display="block";
                // const currentEl =  e.currentTarget
                // console.log(e.currentTarget);
                break;
            case imagePath.classList.contains("bg-light-flyer"):
                console.log("Bulb-flyer");
                break;

            default:
                return false;
                break;
        }

        /* 
        gsap.to(imagePath, { x: "+=-155",y:"+=70", onComplete:function(){
            imagePath.classList.add('cabinet-box')
            imagePath.classList.add('open');
        } });
        */
    };
    useEffect(() => {
        const cabinetEl = document.querySelector(".light-animation-svg");        
        cabinetEl.addEventListener("click", (e) => {
            lightAction(e);
        });

        return () => {
            return () => cabinetEl.removeEventListener("click", lightAction);
        };
    }, []);

    return (
        <div className="bg-light-anim">
            {/* <span>BackgroundLight</span> */}
            <StringLight/>
        </div>
    );
};

export default BackgroundLight;
