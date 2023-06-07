"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const ref = useRef();
    const toggleRef = useRef();
    const [toggle, setToggle] = useState(false);
    const [currentURL, setCurrentURL] = useState(null);
    let count = 0;
    useEffect(() => {
        document.addEventListener("click", checkIfClickedOutside, true);
        if (typeof window !== "undefined") {
            setCurrentURL(window.location.pathname);
        }
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
        } else {
            setToggle(false)
            count--;
        }
    }

    const closeNavbar = (url) => {
        setCurrentURL(url);
    }

    return (
        <header>
            <nav className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <Link onClick={() => closeNavbar("/")} href="/">
                        <div className={styles.logo}>
                            <img src="/Param-Logo.svg" alt="Param Computer Classes logo" />
                        </div>
                    </Link>
                    <div className={styles.toggleMenu} ref={toggleRef}>
                        {toggle ? <img src="/close-solid.svg" alt="=" /> : <img src="/bars-solid.svg" alt="*" />}
                    </div>
                    <ul className={toggle ? styles.navList : styles.navbarClose} ref={ref}>
                        <li onClick={() => closeNavbar("/")}><Link href="/" className={currentURL == "/" ? styles.activeLink : styles.noActiveLink}>Home</Link></li>
                        <li onClick={() => closeNavbar("/about")}><Link href="/about" className={currentURL == "/about" ? styles.activeLink : styles.noActiveLink}>About</Link></li>
                        <li onClick={() => closeNavbar("/courses")}><Link href="/courses" className={currentURL == "/courses" ? styles.activeLink : styles.noActiveLink}>Courses</Link></li>
                        <li onClick={() => closeNavbar("/sales-service")}><Link href="/sales-service" className={currentURL == "/sales-service" ? styles.activeLink : styles.noActiveLink}>Sales & Service</Link></li>
                        <li onClick={() => closeNavbar("/contact")}><Link href="/contact" className={currentURL == "/contact" ? styles.activeLink : styles.noActiveLink}>Contact</Link></li>
                        <li onClick={() => closeNavbar("/contact")}><Link href="/contact" className={styles.enrollNowBtn} >Enroll Now</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Navbar
