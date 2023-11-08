import { useGetBasketProductsQuery } from "@/redux/api/apiSlice";
import MainLayout from "../layout"

export default function BasketPage(){
    return (
        <MainLayout>
            <h1>Корзина</h1>
        </MainLayout>
    )
}