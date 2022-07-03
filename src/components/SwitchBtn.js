import React from "react";

const SwitchBtn = () => {
    const elClick = (e) => {
        document.body.classList.toggle("bg-light-on");
        document.querySelector(".svg-cabinet").style.display = "block";
        document.querySelector(".main-heading svg").style.display = "block";
        const mintSoon = document.querySelector(".mint-soon svg");
        const mintBtn = document.querySelector(".mint-btn svg");
        if (mintSoon !== null) mintSoon.style.display = "block";
        if (mintBtn !== null) mintBtn.style.display = "block";
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
