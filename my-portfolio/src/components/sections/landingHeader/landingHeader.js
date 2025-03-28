import React from "react";
import style from "./landingHeader.module.css";
import backgroundStyle from "../../backgrounds/headerBackground.module.css";
import classNames from "classnames";

const LandingHeader = () => {
    
    return (
        <div>
            <div className={backgroundStyle.backgroundBody}>
                <div className={backgroundStyle.waves}>
                    <div className={backgroundStyle.wave}></div>
                    <div className={backgroundStyle.wave}></div>   
                    <div className={backgroundStyle.wave}></div>              
                </div>
            </div>
            <div className={classNames(backgroundStyle.backgroundBody,style.headerContainer)}>
                <div className={style.headerContent}>
                    <div className={style.headerText}>
                        <h1 className={style.name}> George Ramsay</h1>
                        <h2> Software Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default LandingHeader;