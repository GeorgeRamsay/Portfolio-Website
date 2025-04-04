import { LandingContent } from "../components/content/landingContent/landingContent";
import { NavBar } from '../components/navBar/navBar.js'
import Star from '../components/backgrounds/stars.js';
import React, { useEffect } from 'react';
function LandingPage() {

    return (
        <div>
            <NavBar />
            <LandingContent />
            <Star />
        </div>
    );
}

export default LandingPage;