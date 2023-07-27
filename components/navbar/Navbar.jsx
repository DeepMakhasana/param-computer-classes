"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const ref = useRef();
    const toggleRef = useRef();
    const [toggle, setToggle] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [currentURL, setCurrentURL] = useState(null);
    let count = 0;

    let width = 0;

    if (typeof window !== 'undefined') {
        width = window.innerWidth;
        console.log('window.innerWidth', window.innerWidth, width);
        console.log(typeof width)
    }

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
            console.log("1 " + count)
        } else if (toggleRef.current.contains(e.target) && count === 1) {
            setToggle(false)
            count--;
            console.log("2 " + count)
        } else if (!ref.current.contains(e.target)) {
            if (count === 1) {
                setToggle(false)
                count--;
                console.log("3 " + count)
            }
        } else {
            // setToggle(false)
            // count--;
            console.log("4 " + count)
        }
    }

    const closeNavbar = (url) => {
        setCurrentURL(url);
        setToggle(false)
        count--;
    }

    const dropdownIcon = () => {
        if (width < 992) {
            if (dropdown) {
                setDropdown(false)
            } else {
                setDropdown(true)
            }
        }
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
                        <div className={styles.upDown}>
                            <div className={styles.upDownIcon}>
                                <li onClick={() => closeNavbar("/courses")} className={styles.dropdownLink}><Link href="/courses" className={currentURL == "/courses" ? styles.activeLink : styles.noActiveLink}>Courses</Link></li>
                                <div onClick={() => dropdownIcon()}>
                                    <img src="/angle-down-solid.svg" alt="^" />
                                </div>
                            </div>

                            <ul className={dropdown ? styles.dropdown : styles.dropdownClose}>
                                <li className={styles.courseTitleLink}>Jewellery Designing Courses</li>
                                <li onClick={() => closeNavbar("/courses/jewelcad")} className={styles.courseSubTitleLink}><Link href="/courses/jewelcad" className={currentURL == "/courses/jewelcad" ? styles.activeLink : styles.noActiveLink}>JewelCAD 5.1</Link></li>
                                <li onClick={() => closeNavbar("/courses/rhinoceros")} className={styles.courseSubTitleLink}><Link href="/courses/rhinoceros" className={currentURL == "/courses/rhinoceros" ? styles.activeLink : styles.noActiveLink}>Rhinoceros 7</Link></li>
                                <li className={styles.courseTitleLink}>Accounting Courses</li>
                                <li onClick={() => closeNavbar("/courses/tally")} className={styles.courseSubTitleLink}><Link href="/courses/tally" className={currentURL == "/courses/tally" ? styles.activeLink : styles.noActiveLink}>Tally Prime</Link></li>
                                <li onClick={() => closeNavbar("/courses/miracle")} className={styles.courseSubTitleLink}><Link href="/courses/miracle" className={currentURL == "/courses/miracle" ? styles.activeLink : styles.noActiveLink}>Miracle</Link></li>
                                <li className={styles.courseTitleLink}>Computer Courses</li>
                                <li onClick={() => closeNavbar("/courses/ccc")} className={styles.courseSubTitleLink}><Link href="/courses/ccc" className={currentURL == "/courses/ccc" ? styles.activeLink : styles.noActiveLink}>CCC</Link></li>
                                <li onClick={() => closeNavbar("/courses/coreldraw")} className={styles.courseSubTitleLink}><Link href="/courses/coreldraw" className={currentURL == "/courses/coreldraw" ? styles.activeLink : styles.noActiveLink}>CorelDRAW</Link></li>

                            </ul>
                        </div>
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
