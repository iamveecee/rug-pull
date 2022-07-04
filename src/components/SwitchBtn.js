import React from "react";

const SwitchBtn = () => {
    const elClick = (e) => {
        document.body.classList.toggle("bg-light-on");
        document.querySelector(".svg-cabinet").style.display = "block";        
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
