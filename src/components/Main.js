import React from "react";
import Drawer from "./Drawer";
import HeadingSection from "./HeadingSection";
import WorkStation from "./WorkStation";
const Main = () => {
    return (
        <>
            <div className="container lead-heading">                
                <div className="row">
                    <div className="col-md-8 col-12">
                        <HeadingSection />
                    </div>
                </div>
            </div>
            <div className="container-fluid workspace-container">
                <div className="row ">
                    <div className="col-md-8">
                        <WorkStation />
                    </div>
                    <div className="col-md-4">
                        <Drawer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
