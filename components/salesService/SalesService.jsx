"use client";
import styles from './sellService.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

export const metadata = {
    title: "New and second-hand computers and laptops sales and service | Param computer",
    description: "We offer new and second-hand computers and laptops according to the customer's requirements and also provide services and paid software like Windows, Microsoft Office, Antivirus, Adobe Photoshop, Tally Prime, JewelCAD 5.1, Rhinoceros 7, and Autocad.",
    keywords: "computer sales and service near me, computer sales and service in rajkot, jewellery designing software, windows key, antivirus, designing software, autocad",
};

const SellService = async () => {
    return (
        <main id='saleService'>
            <div className="heading">
                <h1 className='heading-style'>sales & Service</h1>
                <p>We are provides high quality product and service in affordable price.</p>
            </div>
            <div className="container">
                <div className={styles.sellServiceContainer}>
                    <div className={styles.sellService}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="./laptopSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./laptopSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./laptopSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./laptopSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./laptopSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./laptopSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.info}>
                            <h2>New and second hand Laptop sales & Service</h2>
                            <p>Our educated and helpful team is here to help you through the process since we recognise that finding the ideal laptop may be a difficult undertaking. Whether you're a student searching for a thin and light laptop, a professional needing an efficient machine for difficult work, or a gamer looking for a powerful gaming rig, we have the perfect choice for you.</p>
                            <ul>
                                <li>Laptop Variety</li>
                                <li>Latest Technology</li>
                                <li>Obtainable Prices</li>
                                <li>Customization Options</li>
                                <li>Additional Services</li>
                                <li>Warranty and After-Sales Service</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.sellService}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="./pcSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./pcSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./pcSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./pcSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./pcSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./pcSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.info}>
                            <h2>New and second hand Computer sales & Service</h2>
                            <p>We remain on top of trends by regularly changing our product range to include the latest advances in technology. Our computers come with the most recent parts that provide the best performance and efficiency, from powerful CPUs and fast RAM to modern graphics cards and SSD storage options. In order to improve your current systems and meet changing computing demands, we also provide upgrade alternatives.</p>
                            <ul>
                                <li>Extensive Product Selection</li>
                                <li>Latest Technology and Upgrades</li>
                                <li>Customer Satisfaction Guaranty</li>
                                <li>Knowledgeable and Friendly Staff</li>
                                <li>Repair and Technical Support</li>
                                <li>Warranty and After-Sales Service</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.sellService}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="./softwareSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./softwareSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./softwareSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./softwareSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./softwareSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="./softwareSelling.jpg" alt="sell computer and laptop" />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.info}>
                            <h2>Paid Software selling</h2>
                            <p>Welcome to our platform for paid software, where you can choose from a variety of high-quality software that meets your particular needs. We are committed to offering top-notch software solutions with excellent value and functionality.</p>
                            <ul>
                                <li>Windows (e.g., Microsoft Windows all version)</li>
                                <li>Office Suites (e.g., Microsoft Office)</li>
                                <li>Antivirus and Malware Protection (e.g., Norton, McAfee)</li>
                                <li>Graphic Design Tools (e.g., Adobe Photoshop, CorelDRAW)</li>
                                <li>Accounting and Finance Software (e.g., Tally prime, Miracle)</li>
                                <li>Jewelley designing Software (e.g., JewelCAD, RhinoGold)</li>
                                <li>3D Modeling Software (e.g., Autocad, Autodesk)</li>
                                <li>Video Editing Software (e.g., Adobe Premiere Pro, Final Cut Pro)</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default SellService