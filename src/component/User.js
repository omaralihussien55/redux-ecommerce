import React from 'react'
import styled from 'styled-components'
import Register from './Register'
import Login from './Login'
import { useSelector ,useDispatch} from 'react-redux'
import { showLogin, showRigster } from '../redux/userSlice'
const Container = styled.div`
width:100%;
height:100vh;
background-color:rgb(12, 105, 97);
display: flex;
justify-content: center;
align-items: center;
`
const Content = styled.div`

background-color:white;
display: flex;
flex-direction: column;
`
const Head = styled.div `
flex:0 0 80px;
width:100%;
display:flex;
background-color: rgb(168, 161, 161,.5);
`
const RegistHead = styled.div`
flex:1 0 50%;
height:100%;
display:flex;
justify-content: center;
align-items: center;
cursor:pointer;

`
const LogintHead = styled.div`
flex:1 0 50%;
height:100%;
display:flex;
justify-content: center;
align-items: center;
border-left:1px solid gray;
cursor:pointer;
`
const Body = styled.div`
flex:1;

`
const User = () => {
const {show} = useSelector((state)=> state.user)
const dispatch = useDispatch();

const HandleRegister = ()=>{
 dispatch(showRigster())
} 
  
const HandleLogin = ()=>{
 dispatch(showLogin())
} 
  return (
    <Container >
      <Content className='col-11 col-sm-9 col-md-6 p-0 rounded'>
           <Head className='togglelog'>
           <RegistHead className={show == false && "show" }  onClick={() => HandleRegister() } >Register</RegistHead>
           <LogintHead className={show && "show" } onClick={() => HandleLogin() } >Login</LogintHead>
           </Head>
           <Body className=''>
          {show ? <Login/> : <Register/>}
           </Body>
      </Content>
      
    </Container>
  )
}

export default User