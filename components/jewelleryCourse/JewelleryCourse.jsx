import styles from "./jewelleryCourse.module.css";

const JewelleryCourse = () => {
    return (
        <section className="container">
            <div className="heading">
                <h2>Jewellery Designing Courses</h2>
                <p>We offer a Jewellery Designing Courses with experienced instructors.</p>
                {/* <p>We offer a Jewellery Designing Courses with experienced instructors, and a supportive learning environment.</p> */}
            </div>
            <div className={styles.jewelCourseContainer}>
                <div className={styles.course}>
                    <div className={styles.img}>
                        <img src="./JewelCAD.jpg" alt="JewelCAD course" />
                    </div>
                    <div className={styles.courseName}>
                        <h2>JewelCAD Course</h2>
                    </div>
                </div>
                <div className={styles.course}>
                    <div className={styles.img}>
                        <img src="./RhinoGold.jpg" alt="RhinoGold course" />
                    </div>
                    <div className={styles.courseName}>
                        <h2>RhinoGold Course</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JewelleryCourse
