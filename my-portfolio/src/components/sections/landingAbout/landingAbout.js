import React, { useEffect, useState } from 'react';
import style from './landingAbout.module.css';
import ProfileImage from '../../../assets/images/projectImages/example profile photo.jpg'
import FadeLayout from '../../../layouts/fadeLayout/fadeLayout';

const LandingAbout = () => {
    

    return (
            <div className={style.aboutBody}>

                <div className={style.aboutContent}>
                    <div className={style.aboutImageContainer}>
                        <img className={style.aboutImage} src={ProfileImage} alt="profile" />
                    </div>
                    <div className={style.aboutText}>
                        <h1>About Me</h1>
                        <p>Dedicated Computer Science graduate with a strong passion for Front-End and Back-End development, as well as UI/UX design, seeking opportunities to contribute as a Full-Stack developer or Front-End developer. I am eager to apply my skills and creativity to build user-friendly applications and enhance overall user experiences.</p>
                    </div>
                </div>

            </div>
    );
};

export default LandingAbout;