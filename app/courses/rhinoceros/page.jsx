import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "Master the Jewellery Design with Rhinoceros 7 in Rajkot | Param CAD Center",
    description: "Using Rhinoceros 7, our knowledgeable educators will walk you through the full jewellery design process. From sketching and concept development to 3D modelling and rendering.",
    keywords: "Rhinoceros, Rhinoceros course, Rhinoceros course in rajkot, jewellery designing course, Rhinoceros software course",
};

const rhinoGold = () => {
    return (
        <CoursePage
            title={"Rhinoceros 7 course"}
            image={"/RhinoGold.jpg"}
            description={"The Rhinoceros 7 course begins with an introduction to the Rhino 3D software, familiarizing students with its interface and basic tools. It then progresses to cover a wide range of advanced techniques specifically tailored for jewelry design. Students learn to create 3D models of various jewelry pieces, including rings, earrings, necklaces, bracelets, and more."}
            curriculum={["Introduction to Rhinoceros 7", "Jewelry Design Basics", "Creating Basic Jewelry Shapes", "Advanced Jewelry Modeling Techniques", "Gemstone Setting", "Texture and Material Application", "Rendering and Visualization", "Exporting for Manufacturing"]}
        />
    )
}

export default rhinoGold