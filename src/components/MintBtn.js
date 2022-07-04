import React from "react";
import Lottie from "react-lottie-player";
import mintLottie from "../assets/mint-btn.json";

const MintBtn = () => {
    return (
        <Lottie
            key={new Date()}
            className="mint-btn"
            loop
            animationData={mintLottie}
            play
            speed={1}
        />
    );
};

export default MintBtn;
