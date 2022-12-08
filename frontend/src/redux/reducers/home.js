import { createSlice } from "@reduxjs/toolkit";
const home=createSlice({
    name:"home",
    initialState:{},
    reducers:{
        getAPIForYou:(state,action)=>{
            const newState={forYou:action.payload}

            return newState
        }
    }
})
export const{getAPIForYou}=home.actions
export default home.reducer