import React, { useEffect } from 'react';

const TransitionSquares = ({ onComplete }) => {
    useEffect(() => {
        const greySquare = document.createElement('div');
        greySquare.className = 'greySquare';
        document.body.appendChild(greySquare);

        const purpleSquareTimeout = setTimeout(() => {
            const purpleSquare = document.createElement('div');
            purpleSquare.className = 'purpleSquare';
            document.body.appendChild(purpleSquare);

            const navigateTimeout = setTimeout(() => {
                if (onComplete) {
                    onComplete();
                }
            }, 300); // 0.3 seconds delay

            return () => clearTimeout(navigateTimeout);
        }, 200); // Reduced delay to start purple square animation after grey square

        const removeGreySquareTimeout = setTimeout(() => {
            document.body.removeChild(greySquare);
        }, 500); // Adjust this delay as needed

        return () => {
            clearTimeout(purpleSquareTimeout);
            clearTimeout(removeGreySquareTimeout);
        };
    }, [onComplete]);

    return null;
};

export default TransitionSquares;