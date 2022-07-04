import React from "react";
import Lottie from "react-lottie-player";
import MintSoonLottie from "../assets/mint-soon.json";

const MintSoon = () => {
    return (
        <Lottie
            key={new Date()}
            className="mint-soon"
            loop
            animationData={MintSoonLottie}
            play
            speed={1}
        />
    );
};

export default MintSoon;
