import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { UserName,PassWord,addUserLogin } from '../redux/userSlice'
const Container =  styled.div`
width:100%;
height:100%;
`

const Item = styled.div`

`
const Input = styled.input`
padding:10px;
width:100%;
border:1px solid gray;
`
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
width:100%;
height:100%;
padding:0
`
const Login = () => {
  const {show,username,password,usererror,passerror} = useSelector((state)=> state.user)

  const dispatch= useDispatch()

  const Handleuser = (e)=>{
    dispatch(UserName({type:"L",username:e.target.value}))
  }

  const Handlepass = (e)=>{
    dispatch(PassWord({type:"L",password:e.target.value}))
  }

  const HandleAddUser=(e)=>{
   e.preventDefault()
    dispatch(addUserLogin())

 
  }
  return (
    <Container>
    <Form className='mt-3'>
    <Item className='p-2'>
   <label className='w-100 p-1'>
    user name
   <Input value={username} type="text" className={usererror ?"border-danger":"border-info"}  placeholder='User Name' onChange={Handleuser} />
   </label>
 <label className='w-100 p-1'>
 password
 <Input value={password} type="password" className={passerror ? "border-danger":"border-info"} placeholder='Password' onChange={Handlepass} />
 </label>
    </Item>
   
      <button className='btn btn-primary w-100' onClick={HandleAddUser} >Login</button>
    </Form>
    </Container>
  )
}

export default Login