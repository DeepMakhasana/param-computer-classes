import styles from './contact.module.css'

const Contact = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
        <main>
            <div className="heading">
                <h2 className='heading-style'>Contact Us</h2>
                <p>Please feel free to contact us for any inquiries or assistance you may need. We are here to help!</p>
            </div>
            <div className={styles.contactForm}>
                <form>
                    <div className={styles.inputField}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="number">WhatsApp Number</label>
                        <input type="number" id="number" name="number" placeholder="WhatsApp Number" />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="course">Course</label>
                        <select id="course" name="course">
                            <option value="NAN" selected>Select Course</option>
                            <option value="JewelCAD">JewelCAD</option>
                            <option value="RhinoGold">RhinoGold</option>
                            <option value="ArtCAM">ArtCAM</option>
                            <option value="CCC">CCC</option>
                            <option value="Tally prime">Tally Prime</option>
                            <option value="Miracle">Miracle</option>
                            <option value="CorelDRAW">CorelDRAW</option>
                        </select>
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Write Message.." style={{ height: "200px" }}></textarea>
                    </div>

                    <input type="submit" value="Submit and Connect on WhatsApp" />
                </form>
            </div>
        </main>
    )
}

export default Contact
