import Link from 'next/link'
import styles from './coursePage.module.css';

function CoursePage({ title, image, description, curriculum, desc_2 }) {
    return (
        <main className='container'>
            <div className={styles.courseContainer}>
                <div className={styles.courseImage}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.courseInfo}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {desc_2 && <p>The <b>CCC Certificate</b> is basic level Computer Certificate, CCC Certificate compulsory in almost every Govt. Sector. Student can get certificate from <b>NSVT, Govt. of India.</b></p>}
                    <h2>Curriculum of {title}</h2>
                    <ul>
                        {
                            curriculum.map(li => <li>{li}</li>)
                        }
                    </ul>
                    <div className={styles.courseBtn}>
                        <Link href="/contact">Contact for Demo Lecture</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CoursePage
