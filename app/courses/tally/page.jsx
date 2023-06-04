import CoursePage from '@/components/coursePage/CoursePage';

const tally = () => {
    return (
        <CoursePage
            title={"Tally Prime course"}
            image={"/tallyCourse.jpg"}
            description={"The Tally course is designed to provide a comprehensive understanding of Tally, one of the most popular accounting software used by businesses worldwide. This course aims to provide individuals with the skills and knowledge necessary to effectively manage accounting and financial operations using Tally."}
            curriculum={["Manual Accounting", "Introduction Of Documents", "Book Keeping", "Accounts Set in Tally", "Basic Concept of Inventory", "GST Setup Process", "Prepare Invoice", "Stock Transfer Entry", "Setting for Industrial Inventory/BOM", "Understanding of GST", "Threshold Limit & Rate Structure of GST", "Tax Management", "Tax Planning", "Filling Pan Card Form", "How to file Return of GST & Income Tax", " Practical Account"]}
        />
    )
}

export default tally
