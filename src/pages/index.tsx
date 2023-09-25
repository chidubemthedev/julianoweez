import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/jwaller/Header";
import About from "@/components/jwaller/About";
import Wayout from "@/components/jwaller/Wayout";
import LevelUp from "@/components/jwaller/LevelUp";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/jwaller/Footer";
import Guide from "@/components/jwaller/Guide";
import Latest from "@/components/jwaller/Latest";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#06060c] text-white">
      <Navigation />
      <Header />
      <About />
      <Wayout />
      <LevelUp />
      <Latest />
      <Guide />
      <Footer />
    </div>
  );
}
