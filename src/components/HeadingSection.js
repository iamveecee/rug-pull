import React, { useEffect } from "react";
import { ReactComponent as HeadingSVG } from "../assets/heading.svg";
import MintBtn from "./MintBtn";
import { gsap } from "gsap";

const HeadingSection = () => {
    const headingAnimation = () => {
        const mintText = document.querySelectorAll(".svg-heading-text");
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
         headingAnimation();
    }, []);

    return (
        <>
            <div className="heading-container">
                <div className="main-heading">
                    <HeadingSVG />
                </div>
                <div className="mint-btn">
                    <MintBtn />
                </div>
            </div>
        </>
    );
};

export default HeadingSection;
