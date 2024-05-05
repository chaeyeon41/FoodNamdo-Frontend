import React, { useState, useEffect, useCallback } from 'react';


const CarouselContainer = ({ title, styles, images, auto, time, onesImages }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleRightButton = useCallback(() => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }, [])
    const handleLeftButton = useCallback(() => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }, [])
    useEffect(() => {
        let intervalId;
        if (auto) {
            intervalId = setInterval(() => {
                setCurrentImageIndex(prevIndex =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, time || 3000);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, []);

    return (
        <>
        <div className={styles.recommendContain}>
            <div className={styles.recommendText}>{title}</div>
            <div className={styles.recImgContain}>
            {!auto && <button className={styles.buttonStyle} onClick={handleLeftButton}>&lt;</button>}
            {Array.from({ length: onesImages}).map((_, index) => {
                const newIndex = (currentImageIndex + index) % images.length;
                return (
                    <div key={newIndex} className={styles.recImgDiv}>
                        <img src={images[newIndex].imgSrc} className={styles.recommendStoreImg} alt={`Cafe ${newIndex + 1}`} />
                        <div className={styles.imgText}>{images[newIndex].name}</div>
                    </div>
    );
})}
                {!auto && <button className={styles.buttonStyle} onClick={handleRightButton}>&gt;</button>}
            </div>
          </div>
        </>
    );
};

CarouselContainer.defaultProps = {
    auto: true, // auto 프롭스가 전달되지 않으면 기본값으로 true 사용
    time: 3000, // time 프롭스가 전달되지 않으면 기본값으로 3000(ms) 사용
    onesImages: 3
};

export default CarouselContainer;
