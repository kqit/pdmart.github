import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducers/cart";
import InformationProductPage from "../reducers/InformationProductPage";
import home from "../reducers/home";
import CategoryProducts from "../reducers/categoryProducts";
export default configureStore({
    reducer:{
        home:home,
        informationProductPage:InformationProductPage,
        cart:cart,
        categoryProducts:CategoryProducts,
    }
})