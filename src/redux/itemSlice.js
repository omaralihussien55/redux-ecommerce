import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";
import { toast } from 'react-toastify';

let dataa = localStorage.getItem("products") ?   JSON.parse( localStorage.getItem("products")) : [];

export const itemSlice = createSlice({
    name:"item",
    initialState:{
       itemShop : dataa ,
       fav:localStorage.getItem("fav") ?   JSON.parse( localStorage.getItem("fav")) : [],
       cart:localStorage.getItem("cart") ?   JSON.parse( localStorage.getItem("cart")) : [],
       qun:null,
       total:null,
       item:{},
       alert:{},
       details:[],
       items:localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):data
    },

    reducers:{
        addFav:(state,action)=>{
if(action.payload.type){
    
    state.itemShop = state.itemShop.map((i)=>{
        if(i.id === action.payload.id){
            if(i.inFav){
                toast.warn("تم الحذف من المفضلة")
            }else{
                toast.success("تم الاضافه الى المفضلة")
            }

            return  {...i,inFav:!i.inFav}
        }else{
            return i
        }
     })
     
     
     localStorage.setItem("products",JSON.stringify(state.itemShop))
     localStorage.setItem("items",JSON.stringify(state.itemShop))
  
     state.itemShop = JSON.parse( localStorage.getItem("products"))
     state.items = state.itemShop
     state.fav = state.itemShop.filter(i=> i.inFav === true)
     localStorage.setItem("fav",JSON.stringify(state.fav))
    
    }else{
   toast.info("انت لم تسجل الدخول بعد")
}
  
        },


        addCart:(state,action)=>{

            if(action.payload.type){
                   
            state.itemShop = state.itemShop.map((i)=>{
    if(i.id === action.payload.id){
                  if(i.inCart){

                  }else{
                    toast.success("تم اضافه المنتج الى العربه")
                  }
                  return  {...i,inCart:true,total:i.qun * i.price}
                }else{
                    return i
                }
                })
             
             localStorage.setItem("products",JSON.stringify(state.itemShop))
             localStorage.setItem("items",JSON.stringify(state.itemShop))
             
             state.itemShop = JSON.parse( localStorage.getItem("products"))
             state.items = state.itemShop
             state.cart = state.itemShop.filter(i=> i.inCart === true)
             state.fav = state.itemShop.filter(i=> i.inFav === true)
             localStorage.setItem("cart",JSON.stringify(state.cart))
             localStorage.setItem("fav",JSON.stringify(state.fav))

    }else{
        toast.info("انت لم تسجل الدخول بعد")
    }
            
        },

        addMinus:(state,action)=>{
            state.cart = state.cart.map((i)=>{
                if(i.id === action.payload){
                    
                    state.qun = i.qun - 1
                   
                  return  {...i,qun:state.qun,total:i.qun * i.price}
                }else{
                    return i
                }
             })
             
             localStorage.setItem("cart",JSON.stringify(state.cart))
             
        },

        addPlus:(state,action)=>{
            state.cart = state.cart.map((i)=>{
                if(i.id === action.payload){
                    state.qun = i.qun + 1
                    
                  return  {...i,qun:state.qun,total:i.qun * i.price}
                }else{
                    return i
                }
             })
             
             localStorage.setItem("cart",JSON.stringify(state.cart))
             
        },

        RemovFromCart:(state,action)=>{
    
         state.itemShop = state.itemShop.map((i)=>{
            if(i.id === action.payload){
               i.inCart = false
               toast.warn("تم حذف المنتج من العربه")
              return  i
            }else{
                return i
            }
         })
         state.cart = state.itemShop.filter(i=> i.inCart === true)
         localStorage.setItem("cart",JSON.stringify(state.cart))

        },

        addDetails:(state,action)=>{
      state.details = state.cart.filter((i)=> i.id == action.payload)
        },
        filter:(state,action)=>{
         if(action.payload == ""){
          state.itemShop = data
         }else{
    
            let i = data.filter((i)=> i.catogry == action.payload)
             
             state.itemShop = i
         }
        },
        search:(state,action)=>{
            if(action.payload.toLowerCase().trim() == ""){
                state.itemShop= data
               }else{
          
                  let i = data.filter((i)=> i.catogry.includes(action.payload.toLowerCase().trim()))
                   
                   state.itemShop = i
               }
        }


    },


})

export const {filter,search,addDetails,addFav,addCart,addPlus,addMinus,RemovFromCart,exchangeStateItem} = itemSlice.actions 

export default itemSlice.reducer