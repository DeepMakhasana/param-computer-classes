import styles from "./about.module.css";

export const metadata = {
  title: "Param Computer Classes | About Us",
  description: "Param computer classes began it's journey in 2010 with a vision to train job-focused youth in India and make them employable at affordable fees. We provide Jewellery Designing and Computer Courses with experienced instructors.",
  keywords: "param computer classes, computer classes in rajkot, jewellery designing course in rajkot, jewellery designing",
};

async function About() {
  return (
    <main>
      <div className="heading">
        <h2 className='heading-style'>About Us</h2>
        <p>We offer a Jewellery Designing and Computer Courses with experienced instructors, and a supportive learning environment.</p>
      </div>
      <div className="bgColor">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <img src="./about-us.jpg" alt="about" />
          </div>
          <div className={styles.aboutInfo}>
            <h1>Welcome to Param Computer Classes</h1>
            <p className={styles.firstPara}>Param computer Classes began its journey in 2010 with a vision to train the job-focused youth and make them employable at affordable fees. As the industry demands 'skilled manpower', we too, expanded our horizon to not just provide practical training to our students but also support them with placement at top companies.</p>
            <p>Param Computer Classes Running Under Shree Param Education Trust. Trust Reg. No. E-8956. We are Proud to be a member of (RSDA) Rajkot Skill Development association & (NSVT) National Society for Vocation Training.</p>
            <h2>Our Mission</h2>
            <p>To provide placement assistance and guidance, helping students explore career opportunities and achieve success in the rapidly evolving field of technology.</p>
          </div>
        </div>
        <div className={styles.points}>
          <h2>Why Join us?</h2>
          <ul>
            <li>13 Year Experience to teach as well as practical work</li>
            <li>100% Life Time Practical Support & Certificate Valid for All India</li>
            <li>Fully High Configuration & Licence Software Computer LAB</li>
            <li>Fire Safety Approved Institute. (NOC No. 341)</li>
            <li>Ladies Special Batch & Ladies Faculty</li>
            <li>Affordable Fees Structure & Instalment Facility</li>
            <li>Experienced and well qualified Faculty</li>
            <li>Placement support</li>
          </ul>
        </div>
      </div>
      {/* <div className="heading">
        <h2 className='heading-style'>Our Faculty</h2>
        <p>We offer a experienced Faculty, and a supportive learning environment.</p>
      </div> */}
      {/* <div className="bgColor">
        <div className={styles.faculty}>
          <div>
            <img src="2.jpeg" alt="demo" />
            <h3>Hiten thakur</h3>
            <p>Founder - CEO</p>
          </div>
          <div>
            <img src="2.jpeg" alt="demo" />
            <h3>Pratik Makwana</h3>
            <p>Manager</p>
          </div>
          <div>
            <img src="2.jpeg" alt="demo" />
            <h3>Ansh Gor</h3>
            <p>JewelCAD 5.1 designer</p>
          </div>
          <div>
            <img src="2.jpeg" alt="demo" />
            <h3>Jay Patel</h3>
            <p>Rhinoceros designer</p>
          </div>
          <div>
            <img src="2.jpeg" alt="demo" />
            <h3>Abhay Parmar</h3>
            <p>corelDRAW designer</p>
          </div>
          <div>
            <img src="2.jpeg" alt="demo" />
            <h3>Hitesh Patel</h3>
            <p>CCC specialist</p>
          </div>
          <div>
            <img src="2.jpeg" alt="demo" />
            <h3>Rahul Gohil</h3>
            <p>Accounting software specialist</p>
          </div>
        </div>
      </div> */}
    </main>
  )
}

export default About;
