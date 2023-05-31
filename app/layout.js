import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Param Computer Classes | Rajkot",
  description: "Param Computer Classes provides several courses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
