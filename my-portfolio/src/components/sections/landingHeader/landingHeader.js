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
                        
                        <span className={style.headerText}>&nbsp; DEVELOPER</span>
                        <p className={style.headerDescription}>
                        Hi! I'm <span style={{ color: 'var(--third-color)' }}>George</span>. A creative Full Stack Developer in my first year of professional experience in building high-performance, scalable, and responsive app solutions.
                        </p>

                        <div className={style.bottomRight}>
                            <p className={classNames(style.colourChange,style.numberHeader)}>2+</p>
                            <p>Professional Projects</p>
                        
                        </div>

               
                </div>
            </div>
        </div>
    );
    }
export default LandingHeader;