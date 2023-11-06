import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "CorelDRAW Course in Rajkot | Param computer classes",
    description: "In our CorelDRAW software course, you'll gain a deep understanding of this powerful vector-based design program. Our expert instructors will guide you through the fundamentals of the software, providing step-by-step instructions and hands-on exercises. ",
    keywords: "coreldraw, coreldraw course in rajkot, coreldraw course near me, coreldraw classes, param computer classes",
};


const corelDraw = () => {
    return (
        <CoursePage
            title={"CorelDRAW CNC"}
            image={"/corelDRAWCourse.jpg"}
            description={"Learn CNC & Laser design in CorelDRAW. Learn vector design, then set your paths and create your CNC program in the CNC software. The path and settings from G-Code become part of the CorelDRAW file."}
            curriculum={["Basic 2D Drawings", "Detail Knowledge of Toolbox", "CNC & Laser Cutting design", "Engraving Design", "Hole Design", "Ball Design", "Export & Use PLT & DXF File"]}
        />
    )
}

export default corelDraw
