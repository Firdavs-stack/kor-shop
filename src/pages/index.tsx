import Image from "next/image";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import Header from "@/components/Header/Header";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={raleway.className}>
      <header>
      <Navbar />
      <CategoriesBar />
      <Header/>
      </header>
    </main>
  );
}
