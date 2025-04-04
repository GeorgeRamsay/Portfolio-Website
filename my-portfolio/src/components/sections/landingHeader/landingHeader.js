import React from "react";
import style from "./landingHeader.module.css";

const LandingHeader = () => {
    
    return (
        <div>
            <div className={style.headerContainer}>
                <div className={style.headerContent}>   
                    <div className={style.headerText}>
                        <h1> FULLSTACK DEVELOPER</h1>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default LandingHeader;