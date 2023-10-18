import Image from "next/image";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import Header from "@/components/Header/Header";
import ContentBox from "@/components/ContentBox/ContentBox";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/shared/Logo/Container/Container";

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
        <Container>
        <h1 className="text-center text-3xl mb-5">Интернет магазин</h1>
        <ContentBox title='Популярные товары' items={firstitems}/>
        <ContentBox title='Популярные товары' items={firstitems}/>
        <ContentBox title='Популярные товары' items={firstitems}/>
        <ContentBox title='Популярные товары' items={firstitems}/>
        </Container>
      </div>
      <Footer/>
    </main>
  );
}
