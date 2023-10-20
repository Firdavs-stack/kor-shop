import {useCallback, useEffect, useState} from 'react';
import Image from "next/image";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import CategoriesBar from "@/components/CategoriesBar/CategoriesBar";
import Header from "@/components/Header/Header";
import ContentBox from "@/components/ContentBox/ContentBox";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/shared/Logo/Container/Container";
import classNames from "classnames";
import styles from "./index.module.css";
import {useDispatch, useSelector} from 'react-redux';
import { useGetProductsQuery } from '@/redux/api/apiSlice';
import { getProducts } from '@/redux/features/products/productsSlice';

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state:any) => state.products);

  const {
    data: response,
    isLoading
  }:any = useGetProductsQuery({});
  
  useEffect(()=>{
    if(!isLoading){
      console.log(response);
    dispatch(getProducts(response))
    }
  },[isLoading]);

  return (
    <main className={classNames(raleway.className, styles.main)}>
      <header>
        <Navbar />
        <CategoriesBar />
        <Header />
      </header>
      <div className='content-box'>
        <Container>
          <h1 className='text-center text-3xl mb-5'>Интернет магазин</h1>
         {!isLoading ? 
         <div>
          <ContentBox title='Популярные товары'/>
        </div> : false}
        </Container>
      </div>
      <Footer />
    </main>
  );
}
