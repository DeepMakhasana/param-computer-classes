import CoursePage from '@/components/coursePage/CoursePage';

const miracle = () => {
    return (
        <CoursePage
            title={"Miracle course"}
            image={"/miracleCourse.jpg"}
            description={"The Miracle Accounting Software Course is a comprehensive training program designed to equip individuals with the necessary skills and knowledge to effectively utilize the Miracle Accounting Software. Developed by industry experts, this course aims to empower participants to streamline financial management processes and optimize accounting tasks using this powerful software."}
            curriculum={["Introduction to Miracle Accounting Software", "Company Setup", "General Ledger Management", "Accounts Payable and Receivable", "Inventory Management", "Financial Reporting and Analysis"]}
        />
    )
}

export default miracle
