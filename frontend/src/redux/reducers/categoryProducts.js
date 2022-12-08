import { createSlice } from "@reduxjs/toolkit";
const CategoryProducts=createSlice({
    name:"categoryProducts",
    initialState:{
        class:{
            id_class:"",
            name:""
        },
        menu:[],
        listProducts:[]
    },
    reducers:{
        setDefault:(state,action)=>{
            return {
                ...state,
                menu:{},
                listProducts:[]
            }
        },
        getClassCategory:(state,action)=>{
            const classCategory=action.payload
            return {...state,class:classCategory}
        }
        ,
        getProducts:(state,action)=>{
            const newListProducts=[...state.listProducts,...action.payload]
            return {...state,listProducts:newListProducts}
        },
        getProductsOneCategory:(state,action)=>{
            const newListProducts=[...action.payload]
            return {...state,listProducts:newListProducts}
        },
        getMenu:(state,action)=>{
            const newMenu=[...action.payload]
            return {...state,menu:newMenu}
        }
    }
})
export const {setDefault, getProducts, getProductsOneCategory,
            getMenu, getClassCategory }=CategoryProducts.actions
export default CategoryProducts.reducer