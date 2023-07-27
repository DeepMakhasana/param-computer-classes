"use client";
import { useState } from 'react';
import styles from './contactFrom.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactFrom = () => {
    const [loader, setLoader] = useState(false);

    const submitFrom = async (e) => {
        e.preventDefault();
        setLoader(true);
        const name = document.querySelector("#name");
        const number = document.querySelector("#number");
        const course = document.querySelector("#course");
        const message = document.querySelector("#message");

        const form = document.forms['formData'];

        await fetch("https://script.google.com/macros/s/AKfycbwg3M-3615ePTWvq1kugi9K7nnbXS-zqXsZoGyaAw9FTD0NrNZi7URInNHJyUWZWug/exec",
            {
                method: "POST",
                body: new FormData(form),
            }).then((res) => res.json()).then((response) => {
                if (response.result === "success") {
                    setLoader(false);
                    toast.success("Message Send Successfully. We are contact you in short time.");
                } else {
                    setLoader(false);
                    toast.error("Please form fill again because of some error!");
                }
            });

        name.value = "";
        number.value = "";
        course.value = "";
        message.value = "";
    }
    return (
        <main>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="heading">
                <h2 className='heading-style'>Contact Us</h2>
                <p>Please feel free to contact us for any inquiries or assistance you may need. We are here to help!</p>
            </div>
            <div className={styles.contactForm}>
                {loader ?
                    <div className={styles.loaderContainer}>
                        <div className={styles.loader}>
                            <div></div>
                            <div></div>
                        </div>
                    </div> :
                    <div>
                        <form onSubmit={submitFrom} method='POST' id='formData'>
                            <div className={styles.inputField}>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name" required />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="number">WhatsApp Number</label>
                                <input type="tel" id="number" name="number" placeholder="WhatsApp Number" title="Please use a 10 digit telephone number with no dashes or dots" pattern="[0-9]{10}" required />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="course">Course</label>
                                <select id="course" name="course" required>
                                    <option value="">Select Course</option>
                                    <option value="JewelCAD">JewelCAD 5.1</option>
                                    <option value="RhinoGold">Rhinoceros 7</option>
                                    <option value="ArtCAM">ArtCAM</option>
                                    <option value="KeyShot">KeyShot</option>
                                    <option value="CCC">CCC</option>
                                    <option value="Tally prime">Tally Prime</option>
                                    <option value="Miracle">Miracle</option>
                                    <option value="CorelDRAW">CorelDRAW</option>
                                </select>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Write Message.." style={{ height: "200px" }} required></textarea>
                            </div>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>}
            </div>
        </main>
    )
}

export default ContactFrom
