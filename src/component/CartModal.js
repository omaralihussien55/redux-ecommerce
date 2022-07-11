import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { RemovFromCart } from '../redux/itemSlice'
import ContainerCarts from './ContainerCarts'
import {Link} from 'react-router-dom'
const CartModal = () => {
    const {cart} = useSelector((state)=> state.data)
  const [total ,setTotal ]= useState(0)
    const dispatch = useDispatch()

    const HandleRemov = (id)=>{
        dispatch(RemovFromCart(id))
     }


  return (
    <ContainerCarts>
{
    cart.map((i)=>{
        return(
            <div  className='cart d-flex justify-content-between mb-2 border p-2' key={i.id}>
            <div  style={{width:"40px",height:"40px"}}>
            <img src={i.photo} className='w-100 h-100' alt=''/>
            </div>
             <div>{i.title}</div>
             <div>{i.price * i.qun}</div>
              <div className=''><span onClick={()=> HandleRemov(i.id)} style={{cursor:"pointer"}}><i className='fa fa-trash text-danger'></i></span></div>
             <div>

             </div>
          </div>
        )
    })
}

<p>total:{total}</p>
<Link to="cart" className='p-1 text-center text-white d-block'>show all cart</Link>
    </ContainerCarts>
  )
}

export default CartModal