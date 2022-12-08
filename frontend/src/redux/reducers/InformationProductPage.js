import { createSlice } from "@reduxjs/toolkit";

const InformationProductPage=createSlice({
    name:"InformationProductPage",
    initialState:{
        code:"0001", 
        img_product:[
            "https://s.meta.com.vn/Data/image/2022/05/27/quat-cay-vinawind-400x-ms.jpg",
            "https://s.meta.com.vn/Data/image/2022/05/27/quat-cay-vinawind-400x-ms-1.jpg",
            "https://s.meta.com.vn/Data/image/2022/05/27/quat-cay-vinawind-400x-ms-2.jpg",
            "https://s.meta.com.vn/Data/image/2022/05/27/quat-cay-vinawind-400x-ms-3.jpg"
        ],
        name_product:"demoName",
        rate_point:5,
        rate_quantity:99,
        amountSell:99,
        sale:30,
        price:15000000,
        status:true,
        specifictions:[],
        describe:"",
    },
    reducers:{
        changeInformationPage:(state,action)=>{
            return action.payload
        }
    }
})
export const {changeInformationPage }=InformationProductPage.actions
export default InformationProductPage.reducer