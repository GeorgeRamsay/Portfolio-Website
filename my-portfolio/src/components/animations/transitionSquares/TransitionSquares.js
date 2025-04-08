import React, { useEffect } from 'react';

const TransitionSquares = ({ onComplete }) => {
    useEffect(() => {
        const greySquare = document.createElement('div');
        greySquare.className = 'greySquare';
        document.body.appendChild(greySquare);

        let purpleSquare; // Define purpleSquare outside the setTimeout

        setTimeout(() => {
            purpleSquare = document.createElement('div');
            purpleSquare.className = 'purpleSquare';
            document.body.appendChild(purpleSquare);

            setTimeout(() => {
                if (document.body.contains(greySquare)) {
                    document.body.removeChild(greySquare);
                }
                if (document.body.contains(purpleSquare)) {
                    document.body.removeChild(purpleSquare);
                }
                onComplete();
            }, 300); // 0.3 seconds delay
        }, 200); // Reduced delay to start purple square animation after grey square

        return () => {
            if (document.body.contains(greySquare)) {
                document.body.removeChild(greySquare);
            }
            if (purpleSquare && document.body.contains(purpleSquare)) {
                document.body.removeChild(purpleSquare);
            }
        };
    }, [onComplete]);

    return null;
};

export default TransitionSquares;