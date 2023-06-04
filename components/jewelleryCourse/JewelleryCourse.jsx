"use client";
import Link from "next/link";
import styles from "./jewelleryCourse.module.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const JewelleryCourse = () => {
    useEffect(() => {
        AOS.init({
            startEvent: "DOMContentLoaded",
            initClassName: "aos-init",
            animatedClassName: "aos-animate",
        });
    }, []);
    return (
        <section>
            <div className="heading">
                <h2 className="heading-style">Jewellery Designing Courses</h2>
                <p>We offer a Jewellery Designing Courses with experienced instructors.</p>
            </div>
            <div className="bgColor">
                <div className={styles.jewelCourseContainer}>
                    <div className={styles.course} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className={styles.img}>
                            <img src="./JewelCAD.jpg" alt="JewelCAD course" />
                        </div>
                        <div className={styles.courseName}>
                            <h2>JewelCAD Course</h2>
                        </div>
                        <div className={styles.courseLink}>
                            <Link href="/courses/jewelcad">Read More</Link>
                            <Link href="/contact">Enroll Now</Link>
                        </div>
                    </div>
                    <div className={styles.course} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className={styles.img}>
                            <img src="./RhinoGold.jpg" alt="RhinoGold course" />
                        </div>
                        <div className={styles.courseName}>
                            <h2>RhinoGold Course</h2>
                        </div>
                        <div className={styles.courseLink}>
                            <Link href="/courses/rhinogold">Read More</Link>
                            <Link href="/contact">Enroll Now</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default JewelleryCourse
