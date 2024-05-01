import React, { useState, useEffect } from 'react';
import styles from '../Main/Main.module.css';
import cafe1 from '../Main/cafe1.jpg';
import cafe2 from '../Main/cafe2.jpg';
import cafe3 from '../Main/cafe3.jpg';

const Main = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [cafe1, cafe2, cafe3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className={styles.mainContainer}>
          <div className={styles.mainHeader}>
            <div className={styles.namdoText}>경상남도</div>
            <div className={styles.namdoText}>전라남도</div>
          </div>

          <div className={styles.recommendContain}>
            <div className={styles.recommendText}>#나에게 딱 맞는 맛집💫</div>
            <div className={styles.recImgContain}>
              <div className={styles.recImgDiv}>
                <img src={images[(currentImageIndex) % images.length]} className={styles.recommendStoreImg} alt={`Cafe ${currentImageIndex % images.length + 1}`} />
                <div className={styles.imgText}>도레미</div>
              </div>
              <div className={styles.recImgDiv}>
                <img src={images[(currentImageIndex + 1) % images.length]} className={styles.recommendStoreImg} alt={`Cafe ${(currentImageIndex + 1) % images.length + 1}`} />
                <div className={styles.imgText}>도레미</div>
              </div>
              <div className={styles.recImgDiv}>
                <img src={images[(currentImageIndex + 2) % images.length]} className={styles.recommendStoreImg} alt={`Cafe ${(currentImageIndex + 2) % images.length + 1}`} />
                <div className={styles.imgText}>도레미</div>
              </div>
            </div>
          </div>

          <div className={styles.bottomDiv}>
            <div className={styles.bottomImgDiv}>
              <div className={styles.bestStoreDiv}>#BEST 맛집💙</div>
              <div className={styles.bestReviewDiv}>#BEST REVIEW💙</div>
            </div>
            <div className={styles.bottomTextDiv}>
              <div className={styles.viewDiv}>주변 음식점 보기</div>
              <div className={styles.receiptDiv}>영수증 인증</div>
              <div className={styles.myPageDiv}>마이페이지</div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Main;
