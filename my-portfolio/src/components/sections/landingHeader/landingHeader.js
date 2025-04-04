import React from "react";
import style from "./landingHeader.module.css";
import classNames from "classnames";

const LandingHeader = () => {
    
    return (
        <div>
            <div className={style.headerContainer}>
                <div className={style.headerContent}>   
             
                        <span className={classNames(style.headerText,style.colourChange)}> FULLSTACK </span>
                        <br/>
                        
                        <span className={style.headerText}> DEVELOPER</span>
                        <p className={style.headerDescription}>
                        Hi! I'm <span style={{ color: 'var(--third-color)' }}>George</span>. A creative Full Stack Developer in my first year of professional experience in building high-performance, scalable, and responsive app solutions.
                        </p>
                </div>
            </div>
        </div>
    );
    }
export default LandingHeader;