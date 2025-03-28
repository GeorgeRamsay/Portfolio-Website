import React from "react";
import style from "./landingHeader.module.css";

const LandingHeader = () => {
    
    return (
        <div className={style.headerContainer}>
            <div className={style.headerContent}>
                <div className={style.headerText}>
                    <h1 className={style.name}> George Ramsay</h1>
                    <h2> Software Developer</h2>
                </div>
            </div>
        </div>
    );
    }
export default LandingHeader;