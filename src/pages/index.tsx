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
import { useGetCategoriesQuery, useGetProductsQuery, useGetSubCategoriesQuery, useGetBaseCategoriesQuery } from '@/redux/api/apiSlice';
import { getProducts } from '@/redux/features/products/productsSlice';
import { getCategories } from '@/redux/features/categories/categoriesSlice';
import Login from '@/components/shared/Login/Login';

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state:any) => state.products);
  
  const {
    data: categories,
    isLoading: isCategoriesLoading,
  }:any = useGetCategoriesQuery({});
  const {
    data: subCategories,
    isLoading: isSubCategoriesLoading,
  }:any = useGetSubCategoriesQuery({});
  const {
    data: baseCategories,
    isLoading: isBaseCategoriesLoading,
  }:any = useGetBaseCategoriesQuery({});
  const {
    data: response,
    isLoading
  }:any = useGetProductsQuery({});
  
  useEffect(()=>{
    if(!isLoading && !isBaseCategoriesLoading && !isCategoriesLoading && !isSubCategoriesLoading){
    dispatch(getProducts(response));
    dispatch(getCategories({categories,subCategories,baseCategories}));
    }
  },[isLoading,isBaseCategoriesLoading,isSubCategoriesLoading,isCategoriesLoading]);
  
  if(!isLoading && !isBaseCategoriesLoading && !isCategoriesLoading && !isSubCategoriesLoading){
    return (
      <main className={classNames(raleway.className, styles.main)}>
        <header>
          <Navbar />
          <CategoriesBar/>
          <Header />
        </header>
        <div className='content-box'>
          <Container>
            <h1 className='text-center text-3xl mb-5'>Интернет магазин</h1>
  
            <ContentBox title='Популярные товары'/>
          </Container>
        </div>
        <Footer />
      </main>
    )
  }

  return <div>Loader</div>;
}
