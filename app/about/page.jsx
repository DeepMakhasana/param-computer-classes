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
            <img src="./about.jpg" alt="about" />
          </div>
          <div className={styles.aboutInfo}>
            <h1>Welcome to Param Computer classes</h1>
            <p className={styles.firstPara}>Param computer Classes began its journey in 2010 with a vision to train the job-focused youth in India and make them employable at affordable fees. As the industry demands 'skilled manpower', we too, expanded our horizon to not just provide practical training to our students but also support them with placement at top companies.</p>
            <p>We offer a wide range of courses and programs that cater to the needs of beginners as well as professionals looking to enhance their skills. Our curriculum is designed to cover various aspects of Jewellery designing courses, Accounting courses, basic computer courses and more. Our courses are regularly updated to keep up with the latest industry trends and technologies.</p>
            <h2>Our Mission</h2>
            <ul>
              <li>To provide comprehensive and professional training in jewelry design, equipping students with the skills and knowledge required to excel in the industry.</li>
              <li>To foster creativity and innovation in jewelry design, encouraging students to explore new concepts, techniques, and materials.</li>
              <li>To provide comprehensive computer education, covering a wide range of topics and technologies, to empower individuals with essential digital skills.</li>
              <li>To deliver practical and hands-on training, enabling students to apply their knowledge to real-world scenarios and projects.</li>
              <li>To stay updated with the latest advancements in the field of technology and incorporate them into the curriculum, ensuring students are prepared for current industry demands.</li>
              <li>To provide placement assistance and guidance, helping students explore career opportunities and achieve success in the rapidly evolving field of technology.</li>
            </ul>
          </div>
        </div>
        <div className={styles.points}>
          <h2>JOIN THE SPEED COMPUTERS, TO GET THE BEST OUT OF YOU</h2>
          <ul>
            <li>13 Year of Experience in Computer Teaching</li>
            <li>Latest Syllabus</li>
            <li>Experienced and well qualified Faculty</li>
            <li>Personal Computer</li>
            <li>Personal Teaching</li>
            <li>Job Oriented courses</li>
            <li>Reasonable Fees structure</li>
            <li>Easy installment Facility</li>
            <li>Placement support</li>
          </ul>
        </div>
      </div>
      <div className="heading">
        <h2 className='heading-style'>Our Faculty</h2>
        <p>We offer a experienced Faculty, and a supportive learning environment.</p>
      </div>
      <div className="bgColor">
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
            <p>Rhinoceros 7 designer</p>
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
      </div>
    </main>
  )
}

export default About;
