import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "Jewellery designing course using JewelCAD in Rajkot | Param CAD Center",
    description: "In our JewelCAD course, expert instructors will guide you through the fundamentals of JewelCAD, helping you understand the features and functionalities of the software through practical exercises and hands-on training.",
    keywords: "jewelcad, jewelcad course,  jeweller designing course in Rajkot, jewelcad course near me, Jewellery designing course, jewellery cad center near me",
};

const JewelCad = () => {
    return (
        <CoursePage
            title={"JewelCAD course"}
            image={"/JewelCAD.jpg"}
            description={"Throughout the course, students gain hands-on experience by working on practical exercises and projects. They have the opportunity to design a variety of jewelry pieces, such as rings, necklaces, bracelets, and earrings. They learn how to incorporate different gemstones, metals, and intricate details into their designs to achieve stunning and visually appealing results."}
            curriculum={["Intuitive Interface", "jewellery 3D Modeling", "Gemstone Setting Techniques", "Parametric Modeling", "Material Application and Texturing", "Rendering and Visualization", "Design Workflow and Productivity", "Industry Standards and Manufacturing Considerations", "Project Work and Portfolio Development"]}
        />
    )
}

export default JewelCad
