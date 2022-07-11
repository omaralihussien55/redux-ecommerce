import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../redux/itemSlice";
import userSlice from "../redux/userSlice";

const store = configureStore({
    reducer:{
        
       data: itemSlice,
       user:userSlice,
      
    }
})


export default store