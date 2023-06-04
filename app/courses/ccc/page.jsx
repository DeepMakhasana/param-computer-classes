import CoursePage from '@/components/coursePage/CoursePage';

const ccc = () => {
    return (
        <CoursePage
            title={"CCC course"}
            image={"/cccCourses.jpg"}
            description={"The Computer Concepts course offers a crucial basis for understanding the core ideas and elements of computers. Students will learn the fundamentals of computer systems, their functionality, and how they are used in many different kinds of situations in this course."}
            curriculum={["Introduction to Computers", "MS Word", "MS Power Point", "MS Excel", "Paint", "Internet Surfing", "English Typing", "Gujarati Typing"]}
        />
    )
}

export default ccc

