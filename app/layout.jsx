import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#0D7284" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
