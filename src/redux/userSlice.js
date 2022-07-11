import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";
import {toast } from 'react-toastify';
const userr= localStorage.getItem("userR") ? JSON.parse(localStorage.getItem("userR")):[];
const userl= localStorage.getItem("userL") ? JSON.parse(localStorage.getItem("userL")):[];
const userlog = localStorage.getItem("userlog")?JSON.parse(localStorage.getItem("userlog")):{user:"",email:"",password:"",cart:[],fav:[],log:false};

export const userSlice = createSlice({
    name:"user",
    initialState:{
       show:false,
       userR:userr,
       userL:userl,
       username:"",
       email:"",
       password:"",
       validuser:false,
       validemail:false,
       validpass : false,
       userLog:userlog,
       usererror:false,
       emailerror:false,
       passerror:false,
   },
    reducers:{
      showRigster:(state,action)=>{
   state.show = false
      },
      showLogin:(state,action)=>{
        state.show = true
     },

     UserName:(state,action)=>{
    
      state.usererror = false
         if(action.payload.type=="R"){
            // regidter
            state.username = action.payload.username
            let item = state.userR.find((i)=> i.user == action.payload.username)

            if(item){
               state.validuser = true
            }else{
               state.validuser = false
            }

         
         }else{
            // login
            state.username = action.payload.username
            let item = state.userR.find((i)=> i.user == action.payload.username)
           
            if(item){
               state.validuser = true
              
            }else{
               state.validuser = false
            }

         }
     },
     Email:(state,action)=>{
      state.emailerror = false
      if(action.payload.type=="R"){
         state.email = action.payload.email
         let item = state.userR.find((i)=> i.email == action.payload.email)

         if(item){
            state.validemail = true
          
         }else{
            state.validemail = false
            console.log(state.validuser)
         }
      }else{
         //  no email 
      }
     },
      PassWord:(state,action)=>{
         state.passerror= false
      if(action.payload.type=="L"){
         state.password = action.payload.password
          
      }else{
         state.password = action.payload.password
      }
     },

     addUserRegist : (state,action)=>{

 
      if(state.username=="" || state.email == "" ||  state.password==""){
         toast.error("يجب ان تملئ جميع الحقول")
         if(state.username==""){
            state.usererror = true
         }
         if(state.email==""){
            state.emailerror = true
         }
         if(state.password==""){
            state.passerror = true
         }
      
      }else{
            
  if(state.validemail || state.validuser){
    toast.info("هذا الحساب موجود من قبل")
  }else{
   let item = {user:state.username,email:state.email,password:state.password,cart:[],fav:[],log:false,item:data}

   state.userR= [...state.userR,item]
 
  localStorage.setItem("userR",JSON.stringify(state.userR))
  state.userR =  localStorage.getItem("userR") ? JSON.parse(localStorage.getItem("userR")):[];
  toast.success("تم اضافه حساب جديد")
  state.username =""
  state.email =""
  state.password =""
  }
      }

      
     },
     addUserLogin:(state,action)=>{
     
      if(state.username=="" || state.password==""){
         toast.error("يجب ان تملئ جميع الحقول")
         if(state.username==""){
            state.usererror = true
         }
         if(state.password==""){
            state.passerror = true
         }
      }else{
           
        let item = state.userR.find((i)=> i.user == state.username)

         if(item && item.password == state.password){
            item.log= true
            state.userLog = item
            localStorage.setItem("userlog",JSON.stringify(state.userLog))
             toast.success(`${item.user} مرحبا `)
            state.validuser = true
            state.username =""
            state.password =""
         }else{
            state.validuser = false
            toast.error("الرقم السرى خطا او اسم المستخدم")
         }
         
         
            

      }
     
     },

     logOut:(state,action)=>{
       state.userLog.log = false
       toast.info("تم تسجيل الخروح")
     },

    }

})

export const {logOut,showRigster,showLogin,UserName,Email,PassWord,addUserRegist,addUserLogin,exchangeStateUser} = userSlice.actions

export default userSlice.reducer