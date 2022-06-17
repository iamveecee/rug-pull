import React from "react";

const SocialBtns = () => {
    return (
        <div className="social-icon-container">
            <div className="social-icon-wrapper">              
              <div className="social-btn" ><img src="../images/twitter-icon.png" alt="" width="111px" height="114px" /></div>
              <div className="social-btn" ><img src="../images/twitter-icon-hover.png" alt="" width="111px" height="114px" /></div>
            </div>
            <div className="social-icon-wrapper">
              <div className="social-btn" ><img src="../images/discord-icon.png" alt="" width="112px" height="112px" /></div>
              <div className="social-btn" ><img  src="../images/discord-icon-hover.png" alt="" width="112px" height="112px" /></div>
            </div>
        </div>
    );
};

export default SocialBtns;
