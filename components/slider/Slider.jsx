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
                            <p><b>JewelCAD</b> and <b>Rhinoceros 7</b> is a specialized computer-aided design (CAD) software that focuses on creating intricate and detailed jewelry designs. It is widely used in the jewelry industry by designers, goldsmiths, and manufacturers to bring their creative ideas to life.</p>
                            <Link href={"/courses"}>Read more</Link>
                            <Link href={"/contact"}>Enroll now</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/ccc.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>We are a trusted provider of CCC</h2>
                            <p><b>CCC (Course on Computer Concepts)</b> is a comprehensive course that introduces individuals to the fundamental concepts and practical applications of computer technology. Designed for beginners, the CCC course covers a wide range of topics related to computers, software, and the Internet.</p>
                            <Link href={"/courses/ccc"}>Read more</Link>
                            <Link href={"/contact"}>Enroll now</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/tally.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>Professional Accounting Software courses</h2>
                            <p><b>Tally Prime</b> and <b>Miracle</b> is a comprehensive course designed to provide individuals and businesses with the necessary skills to effectively manage their financial and accounting processes. This course focuses on teaching participants how to use Tally Prime and Miracle, which is a popular accounting software used globally.</p>
                            <Link href={"/courses#computerCourse"}>Read more</Link>
                            <Link href={"/contact"}>Enroll now</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/pcSelling.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>Computer & Laptop sell and service</h2>
                            <p>Our educated and helpful team is here to help you through the process since we recognise that finding the ideal laptop may be a difficult undertaking. Whether you're a student searching for a thin and light laptop, a professional needing an efficient machine for difficult work, or a gamer looking for a powerful gaming rig, we have the perfect choice for you.</p>
                            <Link href={"/sales-service"}>Read more</Link>
                            <Link href={"/contact"}>Enroll now</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/softwareSelling.jpg" />
                    <div className={styles.sliderContent}>
                        <div className={styles.mainContent}>
                            <h2>Paid Software solution</h2>
                            <p><b>Windows</b> (e.g., Microsoft Windows all version), <b>Office</b> Suites (e.g., Microsoft Office), <b>Antivirus</b> and Malware Protection (e.g., Norton, McAfee), <b>Graphic Design Tools</b> (e.g., Adobe Photoshop, CorelDRAW), <b>Accounting and Finance Software</b> (e.g., Tally prime, Miracle) also provide <b>Jewelley designing Software</b> (e.g., JewelCAD 5.1, Rhinoceros 7) and <b>3D Modeling Software</b> (e.g., Autocad, Autodesk).</p>
                            <Link href={"/sales-service"}>Read more</Link>
                            <Link href={"/contact"}>Enroll now</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}