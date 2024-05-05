import React from 'react';
import MainTopCategory from './MainTopCategory';
import MainBottomButton from './MainBottomButton';
import styles from '../Main/Main.module.css';
import CarouselContainer from './CarouselContainer';
import cafe1 from '../Main/cafe1.jpg';
import cafe2 from '../Main/cafe2.jpg';
import cafe3 from '../Main/cafe3.jpg';
import style1 from '../Main/Recommend.module.css';
import style2 from '../Main/Best.module.css';



const Main = () => {
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

    return (
      
        <>
        <div className={styles.backgroundColor}>
          <MainTopCategory/>
          <CarouselContainer title={'#나에게 딱 맞는 맛집'} styles={style1} images={images}/>
          <div className={styles.div}>
            <div className={styles.div2}>
          <CarouselContainer title={'#BEST 맛집'} styles={style2} images={images} onesImages={2} auto={false}/>
          <CarouselContainer title={'#BEST REVIEW'} styles={style2} images={images} onesImages={2} auto={false}/>
          </div>
          <MainBottomButton/>
          </div>
          </div>
        </>
      
    )
}

export default Main;
