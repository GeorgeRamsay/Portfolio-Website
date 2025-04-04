import { LandingContent } from "../components/content/landingContent/landingContent";
import Star from '../components/backgrounds/stars.js';
import React, { useEffect } from 'react';
function LandingPage() {

    return (
        <div>

            <LandingContent />
            <Star />
        </div>
    );
}

export default LandingPage;