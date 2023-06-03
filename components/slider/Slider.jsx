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
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
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
                            <h2>Specialize in jewellery courses</h2>
                            <p><b>JewelCAD</b> and <b>RhinoGold</b> is a specialized computer-aided design (CAD) software that focuses on creating intricate and detailed jewelry designs. It is widely used in the jewelry industry by designers, goldsmiths, and manufacturers to bring their creative ideas to life.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src="/amethyst.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>RhinoGold</h2>
                            <p>During the RhinoGold course, participants will learn the fundamentals of RhinoGold, including interface navigation, basic modeling techniques, and gemstone settings. They will also delve into more advanced topics such as organic modeling, creating complex jewelry assemblies, and applying textures and materials to their designs.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <img src="/ccc.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>We are a trusted provider of CCC</h2>
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
                            <h2>Professional Accounting Software courses</h2>
                            <p>Tally Prime and Miracle is a comprehensive course designed to provide individuals and businesses with the necessary skills to effectively manage their financial and accounting processes. This course focuses on teaching participants how to use Tally Prime and Miracle, which is a popular accounting software used globally.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/pcSelling.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>Computer & Laptop sell and service</h2>
                            <p>Our educated and helpful team is here to help you through the process since we recognise that finding the ideal laptop may be a difficult undertaking. Whether you're a student searching for a thin and light laptop, a professional needing an efficient machine for difficult work, or a gamer looking for a powerful gaming rig, we have the perfect choice for you.</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/softwareSelling.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>Paid Software solution</h2>
                            <p>Windows (e.g., Microsoft Windows all version), Office Suites (e.g., Microsoft Office), Antivirus and Malware Protection (e.g., Norton, McAfee), Graphic Design Tools (e.g., Adobe Photoshop, CorelDRAW), Accounting and Finance Software (e.g., Tally prime, Miracle) also provide Jewelley designing Software (e.g., JewelCAD, RhinoGold) and 3D Modeling Software (e.g., Autocad, Autodesk).</p>
                            <Link href={"/"}>Enroll now</Link>
                            <Link href={"/"}>Read more</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}