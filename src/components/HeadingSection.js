import React from "react";
import Lottie from "react-lottie-player";
import headingLottie from "../assets/we-are-not.json";

import MintBtn from "./MintBtn";
import MintSoon from "./MintSoon";

const HeadingSection = () => {
    
    return (
        <>
            <div className="heading-container">
                <div className="main-heading-wrapper">
                    <Lottie
                        className="main-heading"
                        // loop={false}
                        loop
                        animationData={headingLottie}
                        play                        
                    />
                </div>
                <div className="mint-btn-wrapper">
                    <MintSoon />
                    {/* <MintBtn /> */}
                </div>
            </div>
        </>
    );
};

export default HeadingSection;
