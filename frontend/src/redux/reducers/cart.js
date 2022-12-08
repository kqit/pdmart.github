import { createSlice } from "@reduxjs/toolkit";
const cart=createSlice({
    name:"cart",
    initialState:{
        listProduct:[],
        totalPrice:{
            ship:25000,
            sale:100000
        },
        paymentInformation:{
            fullName:"demo name",
            phone:"0123456789",
            province:"Tỉnh abc",
            districts:"Huyện",
            wards:"Xã",
            place:"Địa chỉ cụ thể",
            payment:"Hình thức thanh toán",
            otherRequest:"Yêu cầu khác"
        }
    },
    reducers:{
        addProduct : (state,action)=>{
            let check=false
                const newListProduct=state.listProduct.map(item=>{
                    if(item.code==action.payload.code){
                        check=true
                        return {...item,amount:item.amount+action.payload.amount}
                    }
                    else return{...item}
                })
            if(!check){
                const newListProduct=[...state.listProduct,action.payload]
                return {...state,listProduct:newListProduct}
            }else{
                return {...state,listProduct:newListProduct}
            }
        },
        removeProduct:(state,action)=>{
            const newListProduct=state.listProduct.filter(item=>item.code!==action.payload.code)
            return {...state,listProduct:newListProduct}
        },
        changeAmount : (state,action)=>{
            const newListProduct=state.listProduct.map((item)=>{
                if(item.code==action.payload.code){
                    return {...item,amount:action.payload.amount}
                }
                else{
                    return item
                }
            })
            return {...state,listProduct:newListProduct}
        }
    }
})
export const {addProduct, changeAmount,removeProduct} = cart.actions
export default cart.reducer