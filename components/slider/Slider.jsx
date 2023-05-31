"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/ring-design.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>JewelCAD</h2>
                            <p>JewelCAD is a specialized computer-aided design (CAD) software that focuses on creating intricate and detailed jewelry designs. It is widely used in the jewelry industry by designers, goldsmiths, and manufacturers to bring their creative ideas to life.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/amethyst.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>RhinoGold</h2>
                            <p>During the RhinoGold course, participants will learn the fundamentals of RhinoGold, including interface navigation, basic modeling techniques, and gemstone settings. They will also delve into more advanced topics such as organic modeling, creating complex jewelry assemblies, and applying textures and materials to their designs.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/ccc.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>CCC</h2>
                            <p>CCC (Course on Computer Concepts) is a comprehensive course that introduces individuals to the fundamental concepts and practical applications of computer technology. Designed for beginners, the CCC course covers a wide range of topics related to computers, software, and the Internet.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/tally.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>Tally Prime</h2>
                            <p>Tally Prime is a comprehensive course designed to provide individuals and businesses with the necessary skills to effectively manage their financial and accounting processes. This course focuses on teaching participants how to use Tally Prime, which is a popular accounting software used globally.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/chain.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>RhinoGold</h2>
                            <p>During the RhinoGold course, participants will learn the fundamentals of RhinoGold, including interface navigation, basic modeling techniques, and gemstone settings. They will also delve into more advanced topics such as organic modeling, creating complex jewelry assemblies, and applying textures and materials to their designs.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/chain.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>RhinoGold</h2>
                            <p>During the RhinoGold course, participants will learn the fundamentals of RhinoGold, including interface navigation, basic modeling techniques, and gemstone settings. They will also delve into more advanced topics such as organic modeling, creating complex jewelry assemblies, and applying textures and materials to their designs.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}