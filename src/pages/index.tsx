import Image from "next/image";
import {Raleway } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={raleway.className}>
      <Navbar/>
    </main>
  );
}
