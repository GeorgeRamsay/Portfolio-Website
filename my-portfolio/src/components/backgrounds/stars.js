import React, { useEffect } from 'react';

const Star = () => {
    useEffect(() => {
        function stars() {
            let e = document.createElement("div");
            e.setAttribute("class", "star");
            document.body.appendChild(e);
            e.style.left = Math.random() * window.innerWidth + "px";
        
            let size = Math.random() * 12;
            let duration = Math.random() * 10;
        
            e.style.fontSize = size + "px";
            e.style.animationDuration = 2 + duration + "s";
            setTimeout(function () {
                document.body.removeChild(e);
            }, 5000);
        }
        
        const intervalId = setInterval(function () {
            stars();
        }, 50);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return null; 
};

export default Star;