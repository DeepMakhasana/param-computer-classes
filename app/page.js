// import Image from "next/image";
import Slider from "@/components/slider/Slider";
import styles from "./page.module.css";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import Counting from "@/components/counting/Counting";
import JewelleryCourse from "@/components/jewelleryCourse/JewelleryCourse";
import ComputerCourse from "@/components/computerCourse/ComputerCourse";
import Testimonials from "@/components/testimonials/Testimonials";
import Gallery from "@/components/gallery/Gallery";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <main>
      {/* Slider section START */}
      <Slider />
      {/* Slider section END */}

      {/* Why Choose Us section START */}
      <WhyChooseUs />
      {/* Why Choose Us section END */}

      {/* Counting section START */}
      <Counting />
      {/* Counting section END */}

      {/* Jewellery Course section START */}
      <JewelleryCourse />
      {/* Jewellery Course section END */}

      {/* Computer Course section START */}
      <ComputerCourse />
      {/* Computer Course section END */}

      {/* Testimonials section START */}
      <Testimonials />
      {/* Testimonials section END */}

      {/* Gallery section START */}
      <Gallery />
      {/* Gallery section END */}

      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
