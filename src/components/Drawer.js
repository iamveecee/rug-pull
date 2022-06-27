import React, { useEffect } from "react";
import { ReactComponent as Cabinet } from "../assets/cabinet.svg";
import { gsap } from "gsap";

const Drawer = () => {
    function boxClick(e) {
        const path = e.path || e.composedPath();
        const imagePath = path[1];
        if (!imagePath.classList.contains("cabinet-box")) return false;
        imagePath.classList.remove("cabinet-box");
        if (!imagePath.classList.contains("open")) {
            gsap.to(imagePath, {
                x: "+=-110",
                y: "+=50",
                onComplete: function () {
                    imagePath.classList.add("cabinet-box");
                    imagePath.classList.add("open");
                },
            });
        } else {
            gsap.to(imagePath, {
                x: "+=110",
                y: "-=50",
                onComplete: function () {
                    imagePath.classList.add("cabinet-box");
                    imagePath.classList.remove("open");
                },
            });
        }
    }

    useEffect(() => {
        const cabinetEl = document.querySelector(".svg-cabinet");
        cabinetEl.addEventListener(
            "click",
            (e) => {
                boxClick(e);
            },
            true
        );
        return () => {
            return () => cabinetEl.removeEventListener("click", boxClick);
        };
    }, []);

    return (
        <div className="drawer-container">
            <div className="box-container">
                <Cabinet />
            </div>
        </div>
    );
};

export default Drawer;
