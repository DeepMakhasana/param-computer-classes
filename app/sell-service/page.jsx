import styles from './sellService.module.css'

const SellService = async () => {

  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <main>
      <div className="heading">
        <h1 className='heading-style'>Sell & Service</h1>
        <p>We are provides high quality product and service in affordable price.</p>
      </div>
      <div className="container">
        <div className={styles.sellServiceContainer}>
          <div className={styles.sellService}>
            <div className={styles.img}>
              <img src="./laptopSelling.jpg" alt="sell computer and laptop" />
            </div>
            <div className={styles.info}>
              <h2>New and second hand Laptop Sell & Service</h2>
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
            <div className={styles.img}>
              <img src="./pcSelling.jpg" alt="sell computer and laptop" />
            </div>
            <div className={styles.info}>
              <h2>New and second hand Computer Sell & Service</h2>
              <p>We remain on top of trends by regularly changing our product range to include the latest advances in technology. Our computers come with the most recent parts that provide the best performance and efficiency, from powerful CPUs and fast RAM to modern graphics cards and SSD storage options. In order to improve your current systems and meet changing computing demands, we also provide upgrade alternatives..</p>
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
            <div className={styles.img}>
              <img src="./softwareSelling.jpg" alt="sell computer and laptop" />
            </div>
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
