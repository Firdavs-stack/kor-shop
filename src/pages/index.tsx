import Image from "next/image";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import Header from "@/components/Header/Header";
import ContentBox from "@/components/ContentBox/ContentBox";
import Footer from "@/components/Footer/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const firstitems = [{label:'Рис', body: 'Офигенный рис', price: 'Дорого'},{label:'Рис', body: 'Офигенный рис', price: 'Дорого'},{label:'Рис', body: 'Офигенный рис', price: 'Дорого'}]
  return (
    <main className={raleway.className}>
      <header>
      <Navbar />
      <CategoriesBar />
      <Header/>
      </header>
      <div className='content-box'>
        <h1 className="text-center text-3xl">Интернет магазин</h1>
        <ContentBox title='Популярные товары' items={firstitems}/>
        <ContentBox title='Популярные товары' items={firstitems}/>
        <ContentBox title='Популярные товары' items={firstitems}/>
        <ContentBox title='Популярные товары' items={firstitems}/>
      </div>
      <Footer/>
    </main>
  );
}
