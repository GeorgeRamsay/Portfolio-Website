import React, { useEffect, useState } from 'react';
import style from './landingAbout.module.css';

const LandingAbout = () => {
    

    return (
            <div className={style.aboutContainer}>

                    <div className={style.aboutContent}>
                    <p className={style.introText}>
                        I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
                    </p>
                    <div className={style.aboutMe}>
                        <p className={style.nameTitle}> 
                            Kia Ora, I'm George.
                        </p>
                        <p className={style.aboutText}>
                            I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to deliver seamless user experiences while ensuring robust functionality. My goal is to bridge the gap between design and development, bringing ideas to life through code.
                        </p>

                    </div>
                    </div>
                </div>

    );
};

export default LandingAbout;