import React from 'react';
import LandingHeader from '../../sections/landingHeader/landingHeader'
import LandingAbout from '../../sections/landingAbout/landingAbout';

import style from './landingContent.module.css';
import FadeLayout from '../../../layouts/fadeLayout/fadeLayout';
import LandingProjects from '../../sections/landingProjects/landingProjects';
export const LandingContent = () => {

    return (
        <div>
           
            <LandingHeader/>
            <div className={style.contentBody}>
                <FadeLayout scrollTriggerPosition={1} fadeInDistance={300} fadeOutDistance={1000}>
                    <LandingAbout/>
                </FadeLayout>
            
                <FadeLayout scrollTriggerPosition={2} fadeInDistance={300} fadeOutDistance={1000}>
                    <LandingProjects/>

                </FadeLayout>

            </div>
        </div>
    )
}
