"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const ref = useRef();
    const toggleRef = useRef();
    const [toggle, setToggle] = useState(false);
    if (typeof window !== "undefined") {
        var location = window.location.pathname;
    }
    const [currentURL, setCurrentURL] = useState(location);
    let count = 0;
    useEffect(() => {
        document.addEventListener("click", checkIfClickedOutside, true);
        console.log(location);
    }, [])

    const checkIfClickedOutside = (e) => {
        if (toggleRef.current.contains(e.target) && count === 0) {
            setToggle(true)
            count++;
        } else if (toggleRef.current.contains(e.target) && count === 1) {
            setToggle(false)
            count--;
        } else if (!ref.current.contains(e.target)) {
            if (count === 1) {
                setToggle(false)
                count--;
            }
        }

        console.log(count);
    }

    const closeNavbar = (url) => {
        setToggle(false)
        console.log(count);
        setCurrentURL(url);
    }

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Link href="/">
                    <div className={styles.logo}>
                        <Image src="/Param-Logo.svg" alt="Param Computer Classes" width={209} height={71} loading='lazy' />
                    </div>
                </Link>
                <div className={styles.toggleMenu} ref={toggleRef}>
                    {toggle ? <Image src="./close-solid.svg" alt="=" width={32} height={32} /> : <Image src="./bars-solid.svg" alt="=" width={32} height={32} />}
                </div>
                <ul className={toggle ? styles.navList : styles.navbarClose} ref={ref}>
                    <li onClick={() => closeNavbar("/")}><Link href="/" className={currentURL == "/" ? styles.activeLink : styles.noActiveLink}>Home</Link></li>
                    <li onClick={() => closeNavbar("/about")}><Link href="/about" className={currentURL == "/about" ? styles.activeLink : styles.noActiveLink}>About</Link></li>
                    <li onClick={() => closeNavbar("/courses")}><Link href="/courses" className={currentURL == "/courses" ? styles.activeLink : styles.noActiveLink}>Courses</Link></li>
                    <li onClick={() => closeNavbar("/sell-service")}><Link href="/sell-service" className={currentURL == "/sell-service" ? styles.activeLink : styles.noActiveLink}>Sell & Service</Link></li>
                    <li onClick={() => closeNavbar("/contact")}><Link href="/contact" className={currentURL == "/contact" ? styles.activeLink : styles.noActiveLink}>Contact</Link></li>
                    <li onClick={() => closeNavbar("/contact")}><Link href="/contact" className={styles.enrollNowBtn} >Enroll Now</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
