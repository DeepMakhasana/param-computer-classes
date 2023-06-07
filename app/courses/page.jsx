import JewelleryCourse from "@/components/jewelleryCourse/JewelleryCourse";
import ComputerCourse from "@/components/computerCourse/ComputerCourse";

export const metadata = {
    title: "Jewellery design, Computer and Accounting courses | Param computer classes",
    description: "We specialize in jewellery courses, a trusted provider of CCC and Professional Accounting Software courses. courses like JewelCAD, RhinoGold, CCC, Tally Prime, Miracle and CorelDRAW.",
    keywords: "JewelCAD, RhinoGold, CCC, Tally prime, Miracle and Coreldraw"
};

const Courses = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
        <main>
            <JewelleryCourse />
            <ComputerCourse />
        </main>
    )
}

export default Courses
