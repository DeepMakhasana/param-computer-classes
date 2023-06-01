"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import styles from "./gallery.module.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import Image from "next/image";

const Gallery = () => {
    return (
        <section>
            <div className={styles.gallery}>
                <div className="heading">
                    <h2 className="heading-style">Gallery</h2>
                    <p>Our Computer Classes Images</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="/about.jpg" alt="room" /></SwiperSlide>
                    <SwiperSlide><img src="/amethyst.jpg" alt="room" /></SwiperSlide>
                    <SwiperSlide><img src="/ring-design.jpg" alt="room" /></SwiperSlide>
                    <SwiperSlide><img src="/ccc.jpg" alt="room" /></SwiperSlide>
                    <SwiperSlide><img src="/jewellery.jpg" alt="room" /></SwiperSlide>
                    <SwiperSlide><img src="/JewelCAD.jpg" alt="room" /></SwiperSlide>
                    <SwiperSlide><img src="/RhinoGold.jpg" alt="room" /></SwiperSlide>
                    <SwiperSlide><img src="/tally.jpg" alt="room" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Gallery
