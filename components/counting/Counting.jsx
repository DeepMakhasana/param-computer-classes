import styles from './counting.module.css'

const Counting = () => {
    return (
        <section className={styles.countingContainer}>
            <p className={styles.topTitle}>MORE THAN 8,000 STUDENTS LEARN FROM OUS</p>
            <div className={styles.countSection}>
                <div className={styles.counter}>
                    <span>8,000+</span>
                    <p>Successful Student</p>
                </div>
                <div className={styles.counter}>
                    <span>100%</span>
                    <p>Project Base Learning</p>
                </div>
                {/* TODO create dynamic */}
                <div className={styles.counter}>
                    <span>13+</span>
                    <p>Years Experience</p>
                </div>
                <div className={styles.counter}>
                    <span>100%</span>
                    <p>Jobs ready Courses</p>
                </div>
            </div>
        </section>
    )
}

export default Counting
