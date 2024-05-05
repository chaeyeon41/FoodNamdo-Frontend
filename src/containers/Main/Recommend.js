import React, { useState, useEffect } from 'react';
import cafe1 from '../Main/cafe1.jpg';
import cafe2 from '../Main/cafe2.jpg';
import cafe3 from '../Main/cafe3.jpg';

const Recommend = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [{
        imgSrc: cafe1,
        name: 'cafe1'
    }, {
        imgSrc: cafe2,
        name: 'cafe2'
    }, {
        imgSrc: cafe3,
        name: 'cafe3'
    }];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <></>
    )
}

export default Recommend;