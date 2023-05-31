import styles from './computerCourse.module.css'

const ComputerCourse = () => {
    return (
        <section className="container">
            <div className="heading">
                <h2>Computer Courses</h2>
                <p>We offer a Computer Courses with experienced instructors, and a supportive learning environment.</p>
                {/* <p>We offer a Jewellery Designing Courses with experienced instructors, and a supportive learning environment.</p> */}
            </div>
            <div className={styles.computerCourseContainer}>
                <div className={`${styles.course} ${styles.ccc}`}>
                    <div className={styles.img}>
                        <img src="./cccCourse.jpg" alt="JewelCAD course" />
                    </div>
                    {/* <div className={styles.courseName}>
                        <h2>CCC Course</h2>
                    </div> */}
                </div>
                <div className={`${styles.course} ${styles.tally}`}>
                    <div className={styles.img}>
                        <img src="./tallyCourse.jpg" alt="RhinoGold course" />
                    </div>
                    {/* <div className={styles.courseName}>
                        <h2>Tally Course</h2>
                    </div> */}
                </div>
                <div className={`${styles.course} ${styles.miracle}`}>
                    <div className={styles.img}>
                        <img src="./miracleCourse.jpg" alt="RhinoGold course" />
                    </div>
                    {/* <div className={styles.courseName}>
                        <h2>Miracle Course</h2>
                    </div> */}
                </div>
                <div className={`${styles.course} ${styles.corelDraw}`}>
                    <div className={styles.img}>
                        <img src="./corelDRAWCourse.jpg" alt="RhinoGold course" />
                    </div>
                    {/* <div className={styles.courseName}>
                        <h2>CorelDRAW Course</h2>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default ComputerCourse
