import JewelleryCourse from "@/components/jewelleryCourse/JewelleryCourse";
import styles from "./courses.module.css";
import ComputerCourse from "@/components/computerCourse/ComputerCourse";

export const metadata = {
    title: "Param Computer Classes | About Us",
    description: "Param Computer Classes provides several courses.",
};

const Courses = () => {
    return (
        <main>
            <JewelleryCourse />
            <ComputerCourse />
        </main>
    )
}

export default Courses
