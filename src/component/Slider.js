
import React, { useState } from 'react'
import styled from 'styled-components'
import ph2 from '../img/ph2.jpg'
import ph7 from '../img/ph7.png'
import ph10 from '../img/ph15.jpg'
import { useNavigate } from 'react-router-dom'
const Container = styled.div`
width:100%;
height: 100vh;
overflow:hidden;
position:relative
`
const Wrapper = styled.div`
width:100%;
height: 100%;
display:flex
`
const Item = styled.div`
flex:0 0 100%;
height: 100%;
transition:all .5s;
transform:translate(${p=> p.c * -100 }%);
background-color:${p=> p.bg};
display:flex;
`

const Button = styled.button`
width:${p=>p.w && p.w}px;
height:${p=>p.h && p.h}px;
background-color:${p=> p.bg&& p.bg};
position:${p=> p.pos && p.pos};
top:${p=> p.top && p.top};
left:${p=> p.left ==="left" && 10}px;
right:${p=> p.right ==="right" && 10}px;
transform:translate(0%,-50%);
z-index:6000;
color:white
`
const Slider = () => {
    const [count,setCount] = useState(0)
     const navigate= useNavigate()
const HandleCount =(dir)=>{
   dir=='left' ? setCount(count <= 0 ? 2: count - 1) : setCount(count >= 2 ? 0: count + 1) 
}
  return (
<Container>
<Button w="40" h="30" pos="absolute" top="50%" bg="transparent"  left="left" ><i class="fa fa-angle-double-left" aria-hidden="true" onClick={()=>HandleCount("left") }></i></Button>
     <Wrapper>
          <Item c={count} bg="black" >
            <div className='col-7 h-100'>
            <img src={ph2} alt='' className='w-100 h-100'/>
            </div>
            <div className='col-5 h-100 d-flex'>
                <div className='w-75 m-auto text-center text-white'>
                   <h3 className='text-center p-1 mb-3'>smart phone <span style={{textDecoration: "line-through"}} className='text-danger'>250 $</span> <span  className='text-success'>230 $</span>  </h3>
                   <p className='text-center p-1 mb-4'> lorem ipsum  mobile phone dailoh gtre nbhiu</p>
                    <Button onClick={()=> navigate('/products')} w="60" h="40"  className='text-white rounded ' bg="rgb(44, 42, 42,.7)">more</Button>
                   </div>
            </div>
          </Item>
          <Item c={count} bg="#35174e">
          <div className='col-7 h-100'>
          <img src={ph7} alt='' className='w-100 h-100'/>
          </div>
          <div className='col-5 h-100 d-flex'>
              <div className='w-75 m-auto text-center text-white'>
                 <h3 className='text-center p-1 mb-3'>smart phone <span style={{textDecoration: "line-through"}} className='text-danger'>220 $</span> <span  className='text-success'>200 $</span>  </h3>
                 <p className='text-center p-1 mb-4'> lorem ipsum  mobile phone dailoh gtre nbhiu</p>
                  <Button onClick={()=> navigate('/products')} w="60" h="40"  className='text-white rounded shadow-lg' bg="rgb(44, 13, 99,.5)">more</Button>
                 </div>
          </div>
          </Item>
          <Item c={count} bg="#020309">
          <div className='col-7 h-100'>
          <img src={ph10} alt='' className='w-100 h-100'/>
          </div>
          <div className='col-5 h-100 d-flex'>
              <div className='w-75 m-auto text-center text-white'>
                 <h3 className='text-center p-1 mb-3'>smart phone <span style={{textDecoration: "line-through"}} className='text-danger'>200 $</span> <span  className='text-success'>190 $</span> </h3>
                 <p className='text-center p-1 mb-4'> lorem ipsum  mobile phone dailoh gtre nbhiu</p>
                  <Button onClick={()=> navigate('/products')}  w="60" h="40"  className='text-white rounded ' bg="rgb(44, 42, 42,.7)">more</Button>
                 </div>
          </div>
          </Item>
     </Wrapper>
     <Button  w="40" h="30" pos="absolute" top="50%" bg="transparent" right="right" ><i class="fa fa-angle-double-right" aria-hidden="true" onClick={()=>HandleCount("right")}></i></Button>
 </Container>
  )
}

export default Slider