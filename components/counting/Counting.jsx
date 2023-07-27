"use client";
import styles from './counting.module.css'
import { useSpring, animated } from '@react-spring/web'

const Counting = () => {
    const currentYear = new Date().getFullYear();
    const yearExperience = currentYear - 2010;

    const CounterNumber = ({ n }) => {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 1000,
            config: {
                mass: 1, tension: 20, friction: 10
            }
        })

        const formatter = new Intl.NumberFormat();

        return <animated.div>{number.to((n) => formatter.format(n.toFixed(0)))}</animated.div>
    }
    return (
        <section className={styles.countingContainer}>
            <p className={styles.topTitle}>MORE THAN 8,000 STUDENTS LEARN FROM US</p>
            <div className={styles.countSection}>
                <div className={styles.counter}>
                    {/* <span>8,000+</span> */}
                    <span><CounterNumber n={8000} />+</span>
                    <p>Successful Student</p>
                </div>
                <div className={styles.counter}>
                    <span><CounterNumber n={100} />%</span>
                    <p>Practical Support while Job</p>
                </div>
                <div className={styles.counter}>
                    <span><CounterNumber n={yearExperience} />+</span>
                    <p>Years Experience</p>
                </div>
                <div className={styles.counter}>
                    <span><CounterNumber n={100} />%</span>
                    <p>Jobs ready Courses</p>
                </div>
            </div>
        </section>
    )
}

export default Counting
