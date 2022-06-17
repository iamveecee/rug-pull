import React from "react";
import Drawer from "./Drawer";
import HeadingSection from "./HeadingSection";

const Main = () => {
    return (
        
            <div className="container-fluid drawer-container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <HeadingSection />
                    </div>
                    <div className="col-md-6 col-12">
                        <Drawer />
                    </div>
                </div>

                <div className="row">
                    <div className="gapper">
                    </div>
                </div>
                
            </div>
        
    );
};

export default Main;
