import React, { useEffect } from "react";
import { ReactComponent as MintBtnAnim } from "../assets/mintBtn.svg";
import { gsap } from "gsap";

const MintBtn = () => {
    const mintAnimation = () => {
        const mintText = document.querySelectorAll(".mint-btn-text");
        gsap.to(mintText, {
            repeat: -1,
            display: "none",
            stagger: {
                each: 0.1,
                onComplete: function () {
                    this.targets()[0].style.display = "block";
                },
            },
        });
    };

    useEffect(() => {
        mintAnimation();
    }, []);

    return <MintBtnAnim />;
};

export default MintBtn;
