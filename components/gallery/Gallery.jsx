"use client";
import React, { useRef, useState } from 'react';
import SwiperCore, { Autoplay, Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './gallery.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Autoplay, Virtual, Navigation, Pagination]);

export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    let width = 0;

    if (typeof window !== 'undefined') {
        width = window.innerWidth;
    }

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    return (
        <section>
            <div className={styles.gallery}>
                <div className="heading">
                    <h2 className="heading-style">Gallery</h2>
                    <p>Our Computer Classes Images</p>
                </div>
                <Swiper
                    onSwiper={setSwiperRef}
                    // slidesPerView={3}
                    slidesPerView={width > 768 ? 3 : 1}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    navigation={true}
                    virtual
                >
                    <SwiperSlide>
                        <img src="/param-bulding.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/g-1.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/g-2.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/g-3.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/j-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/j-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/j-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/j-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/j-7.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/j-8.jpeg" />
                    </SwiperSlide>

                    <div className={styles.autoPlayProgress} slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>

                <p className={styles.appendButtons}>
                    <button onClick={() => slideTo(2)} className={styles.slide250}>
                        Classes
                    </button>
                    <button onClick={() => slideTo(5)} className={styles.slide500}>
                        JewelCAD design
                    </button>
                    <button onClick={() => slideTo(9)} className={styles.slide500}>
                        RhinoGold design
                    </button>
                </p>
            </div>
        </section>
    );
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}