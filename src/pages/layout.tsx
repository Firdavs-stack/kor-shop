import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Container from "@/components/shared/Logo/Container/Container";
import classNames from "classnames";
import { Raleway } from "next/font/google";
import styles from "./index.module.css";

const raleway = Raleway({ subsets: ["latin"] });

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  
  return (
    <main className={classNames(raleway.className, styles.main)}>
      <header>
        <Navbar />
        <CategoriesBar />
      </header>
      <div className='content-box'>
        {children}
      </div>
      <Footer />
    </main>
  );
}
