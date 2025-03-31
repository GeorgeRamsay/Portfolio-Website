import React, { useEffect, useState } from 'react';
import style from './landingAbout.module.css';
import ProfileImage from '../../../assets/images/projectImages/example profile photo.jpg'
import FadeLayout from '../../../layouts/fadeLayout/fadeLayout';
import { IconPhone, IconMail, IconBrandLinkedin } from '@tabler/icons-react';
import CopyButton from '../../buttons/copyButton/copyButton';
import copyButtonStyle from '../../buttons/copyButton/copyButton.module.css';

const LandingAbout = () => {
    

    return (
            <div className={style.aboutBody}>

                <div className={style.aboutContent}>
                    <div className={style.aboutImageContainer}>
                        <img className={style.aboutImage} src={ProfileImage} alt="profile" />
                    </div>
                    <div className={style.aboutText}>
                        <h1 className={style.header}>About Me</h1>
                        <p>Dedicated Computer Science graduate with a strong passion for Front-End and Back-End development, as well as UI/UX design, seeking opportunities to contribute as a Full-Stack developer or Front-End developer. I am eager to apply my skills and creativity to build user-friendly applications and enhance overall user experiences.</p>
                        
                        <div className={style.contactIconContainer}>
                            <IconPhone size={30} className={style.contactIcon} />
                            022 689 8878
                            <CopyButton value="022 689 8878" />

                        </div>
                        
                        <div className={style.contactIconContainer}>

                            <IconMail size={30} className={style.contactIcon} />
                            GeorgeRamsay.personal@gmail.com
                            <CopyButton value="GeorgeRamsay.personal@gmail.com" />

                        </div>
                        <div className={style.contactIconContainer}>

                            <IconBrandLinkedin size={30} className={style.contactIcon}/>
                            <a href="https://www.linkedin.com/in/george-ramsay-901863257/">george-ramsay</a>
                            <CopyButton value="https://www.linkedin.com/in/george-ramsay-901863257/" />

                        </div>
                    
                    </div>
                </div>

            </div>
    );
};

export default LandingAbout;