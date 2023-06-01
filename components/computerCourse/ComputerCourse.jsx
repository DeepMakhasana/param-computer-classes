"use client";
import Link from 'next/link'
import styles from './computerCourse.module.css'
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const ComputerCourse = () => {
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
                <h2 className='heading-style'>Computer Courses</h2>
                <p>We offer a Computer Courses with experienced instructors, and a supportive learning environment.</p>
                {/* <p>We offer a Jewellery Designing Courses with experienced instructors, and a supportive learning environment.</p> */}
            </div>
            <div className='bgColor'>
                <div className={styles.computerCourseContainer}>
                    <div className={`${styles.course} ${styles.ccc}`} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className={styles.img}>
                            <img src="./cccCourse.jpg" alt="JewelCAD course" />
                        </div>
                        <div className={styles.courseInfo}>
                            <h2>Tally Course</h2>
                            <Link href="/">Read More</Link>
                            <Link href="/">Enroll Now</Link>
                        </div>
                    </div>
                    <div className={`${styles.course} ${styles.tally}`} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className={styles.img}>
                            <img src="./tallyCourse.jpg" alt="RhinoGold course" />
                        </div>
                        <div className={styles.courseInfo}>
                            <h2>Tally Course</h2>
                            <Link href="/">Read more</Link>
                            <Link href="/">Enroll now</Link>
                        </div>
                    </div>
                    <div className={`${styles.course} ${styles.miracle}`} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className={styles.img}>
                            <img src="./miracleCourse.jpg" alt="RhinoGold course" />
                        </div>
                        <div className={styles.courseInfo}>
                            <h2>Miracle Course</h2>
                            <Link href="/">Read more</Link>
                            <Link href="/">Enroll now</Link>
                        </div>
                    </div>
                    <div className={`${styles.course} ${styles.corelDraw}`} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className={styles.img}>
                            <img src="./corelDRAWCourse.jpg" alt="RhinoGold course" />
                        </div>
                        <div className={styles.courseInfo}>
                            <h2>CorelDRAW Course</h2>
                            <Link href="/">Read more</Link>
                            <Link href="/">Enroll now</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ComputerCourse
