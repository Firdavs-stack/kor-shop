import styles from './Header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';    

const Header = () => {
    const images = ['/bit-image.jpg','/second-image.jpg','/bit-image.jpg','/bit-image.jpg','/bit-image.jpg','/bit-image.jpg','/bit-image.jpg','/bit-image.jpg',]
    return ( <div className={styles.header}>
        <Swiper slidesPerGroup={1} className={styles.slider}>
            <SwiperSlide className={styles.slide}><img className={styles.slideImage} src={images[0]}/></SwiperSlide>
            <SwiperSlide className={styles.slide}><img className={styles.slideImage} src={images[1]}/></SwiperSlide>
            <SwiperSlide className={styles.slide}><img className={styles.slideImage} src={images[2]}/></SwiperSlide>
        </Swiper>
    </div> );
}
 
export default Header;