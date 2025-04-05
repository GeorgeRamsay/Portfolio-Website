import React, { useEffect, useRef } from 'react';
import style from './pullAway.module.css';

const PullAwayComponent = ({ children }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const topThreshold = window.innerHeight * 0.05;
                const bottomThreshold = window.innerHeight * 0.95;
                if (rect.top < topThreshold || rect.bottom > bottomThreshold) {
                    element.classList.add(style.lowerOpacity);
                } else {
                    element.classList.remove(style.lowerOpacity);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={elementRef} className={style.default}>
            {children}
        </div>
    );
};

export default PullAwayComponent;