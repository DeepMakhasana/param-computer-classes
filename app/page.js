import Slider from "@/components/slider/Slider";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import Counting from "@/components/counting/Counting";
import JewelleryCourse from "@/components/jewelleryCourse/JewelleryCourse";
import ComputerCourse from "@/components/computerCourse/ComputerCourse";
import Testimonials from "@/components/testimonials/Testimonials";
import Gallery from "@/components/gallery/Gallery";

export const metadata = {
  title: "Param Computer Classes | Rajkot",
  description:
    "Param computer classes is a complete solution of jewellery design and computer courses in Rajkot. like JewelCAD, RhinoGold, CCC, Tally Prime, Miracle and CorelDRAW.",
  keywords:
    "param computer classes, computer classes near me, jewellery design courses near me, JewelCAD, RhinoGold, CCC, tally prime, miracle, coreldraw",
};

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <main>
      {/* Slider section START */}
      <Slider />
      {/* Slider section END */}

      {/* Why Choose Us section START */}
      <WhyChooseUs />
      {/* Why Choose Us section END */}

      {/* Counting section START */}
      <Counting />
      {/* Counting section END */}

      {/* Jewellery Course section START */}
      <JewelleryCourse />
      {/* Jewellery Course section END */}

      {/* Computer Course section START */}
      <ComputerCourse />
      {/* Computer Course section END */}

      {/* Testimonials section START */}
      <Testimonials />
      {/* Testimonials section END */}

      {/* Gallery section START */}
      <Gallery />
      {/* Gallery section END */}
    </main>
  );
}
