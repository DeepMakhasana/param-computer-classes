import Link from 'next/link'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.mainFooterContainer}>
                <div className={styles.CoursesLink}>
                    <h3>Courses</h3>
                    <ul>
                        <li><Link href="/">JewelCAD</Link></li>
                        <li><Link href="/">RhinoGold</Link></li>
                        <li><Link href="/">CCC</Link></li>
                        <li><Link href="/">Tally Prime</Link></li>
                        <li><Link href="/">Miracle</Link></li>
                        <li><Link href="/">CorelDRAW</Link></li>
                    </ul>
                </div>
                <div className={styles.navigational}>
                    <h3>Navigational</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Courses</Link></li>
                        <li><Link href="/">Sell & Service</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.contactInformation}>
                    <div>
                        <h3>Classes</h3>
                        <p><Image src={"/location.svg"} alt='location' width={16} height={16} /> Bholenath Arcade, Nr. Ford Service Center, New 80 Feet Road Opp Nagbai Pan Kuvadva Road, Rajkot-3.</p>
                        <p className={styles.align}><Image src={"/contact.svg"} alt='contact' width={16} height={16} /> +91 9624000098 </p>
                        <p className={styles.align}><Image src={"/email.svg"} alt='contact' width={16} height={16} /> praram.cc@gmail.com</p>
                    </div>
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.111701180203!2d70.8204392!3d22.3116149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b6066057d63d%3A0xd79806394daed54d!2sParam%20Computer%20Classes!5e0!3m2!1sen!2sin!4v1685532160829!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className={styles.lastFooter}>
                <p>© Param Computer Classes, All Right Reserved. Designed By <Link href="https://deepmakhasana.netlify.app/">Deep Makhasana</Link></p>
            </div>
        </div>
    )
}

export default Footer
