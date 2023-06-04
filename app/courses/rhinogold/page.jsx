import CoursePage from '@/components/coursePage/CoursePage';

const rhinoGold = () => {
    return (
        <CoursePage
            title={"RhinoGold course"}
            image={"/RhinoGold.jpg"}
            description={"The Rhinogold course begins with an introduction to the Rhino 3D software, familiarizing students with its interface and basic tools. It then progresses to cover a wide range of advanced techniques specifically tailored for jewelry design. Students learn to create 3D models of various jewelry pieces, including rings, earrings, necklaces, bracelets, and more."}
            curriculum={["Introduction to RhinoGold", "Jewelry Design Basics", "Creating Basic Jewelry Shapes", "Advanced Jewelry Modeling Techniques", "Gemstone Setting", "Texture and Material Application", "Rendering and Visualization", "Exporting for Manufacturing"]}
        />
    )
}

export default rhinoGold
