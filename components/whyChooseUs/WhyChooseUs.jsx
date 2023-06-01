"use client";
import styles from './whyChooseUs.module.css'
import Image from 'next/image'
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({
            startEvent: "DOMContentLoaded",
            initClassName: "aos-init",
            animatedClassName: "aos-animate",
        });
    }, []);
    return (
        <section className="container">
            <div className="heading">
                <h2 className='heading-style'>Why Choose Us</h2>
                <p>We offer a comprehensive curriculum, experienced instructors, state-of-the-art facilities, and a supportive learning environment.</p>
            </div>
            <div className={styles.boxContainer}>
                <div className={`${styles.box} ${styles.flexColumnReverse}`} data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                    <div className={styles.boxContent}>
                        <h3 className={styles.tar}>Relevant and Up-to-Date Curriculum</h3>
                        <p className={styles.tar}>
                            Param Computer classes offer a curriculum that is relevant to current industry needs and trends. It's important to regularly update the course content to ensure students are learning the most current.
                        </p>
                    </div>
                    <div className={styles.boxIcon}>
                        <Image src="/curriculum.svg" alt="curriculum" width={48} height={48} />
                    </div>
                </div>
                <div className={`${styles.box} ${styles.flexColumn}`} data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                    <div className={styles.boxIcon}>
                        <Image src="/practical.svg" alt="Facilities" width={48} height={48} />
                    </div>
                    <div className={styles.boxContent}>
                        <h3 className={styles.tal}>Practical Hands-On Experience</h3>
                        <p className={styles.tal}>
                            Incorporating practical, hands-on exercises and projects into the curriculum allows students to apply what they learn and develop real-world skills. This can enhance their understanding and confidence.
                        </p>
                    </div>

                </div>
                <div className={`${styles.box} ${styles.flexColumnReverse}`} data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                    <div className={styles.boxContent}>
                        <h3 className={styles.tar}>Expertise and Experience</h3>
                        <p className={styles.tar}>
                            Our instructors have both academic qualifications and practical industry experience, ensuring that students receive high-quality instruction.
                        </p>
                    </div>
                    <div className={styles.boxIcon}>
                        <Image src="/expertise.svg" alt="expertise" width={48} height={48} />
                    </div>
                </div>
                <div className={`${styles.box} ${styles.flexColumn}`} data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                    <div className={styles.boxIcon}>
                        <Image src="/facilities.svg" alt="curriculum" width={48} height={48} />
                    </div>
                    <div className={styles.boxContent}>
                        <h3 className={styles.tal}>Best Facilities</h3>
                        <p className={styles.tal}>
                            we are provide matirial which is prepare from our huge experience, extra practice time and good quality Computer with High-Speed Internet Connectivity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
