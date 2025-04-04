import { LandingContent } from "../components/content/landingContent/landingContent";
import Star from '../components/backgrounds/stars.js';
import React, { useEffect } from 'react';
import ProgressBar from "../components/animations/progressBar/progressBar.js";
function LandingPage() {

    return (
        <div>

            <LandingContent />
            <Star />
            <ProgressBar/>
        </div>
    );
}

export default LandingPage;