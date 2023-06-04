import CoursePage from '@/components/coursePage/CoursePage';

const corelDraw = () => {
    return (
        <CoursePage
            title={"CorelDRAW course"}
            image={"/corelDRAWCourse.jpg"}
            description={"Throughout the course, students will be guided by expert instructors who have extensive experience in graphic design and are well-versed in CorelDRAW's capabilities. They will receive step-by-step instructions and practical assignments that cover a wide range of design techniques, ensuring a thorough understanding of the software's tools, features, and best practices."}
            curriculum={["Introduction to CorelDRAW", "Vector Graphics", "Working with Text", "Colors and Gradients", "Advanced Drawing Tools", "Image Editing", "Effects and Filters", "Printing and Exporting"]}
        />
    )
}

export default corelDraw
