import React from "react";
import bgImgOn from "../assets/bg-on.png";
import bgImgOff from "../assets/bg-off.png";

const SwitchBtn = () => {
    const elClick = (e) => {
        const bgScreen = document.querySelector(".main-bg-scene");
        if (document.body.classList.contains("bg-light-on")) {
            document.body.classList.remove("bg-light-on");
            bgScreen.style.backgroundImage = `url(${bgImgOff})`;
        } else {
            document.body.classList.add("bg-light-on");
            bgScreen.style.backgroundImage = `url(${bgImgOn})`;
        }
    };

    return (
        <div
            className="switch-btn"
            onClick={(e) => {
                elClick(e);
            }}
        ></div>
    );
};

export default SwitchBtn;
