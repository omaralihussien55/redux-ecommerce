import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RemovFromCart ,addDetails} from '../redux/itemSlice'
import ContainerShoping from './ContainerShoping'
const Cart = () => {
    const {cart} = useSelector((state)=> state.data)
      const dispatch = useDispatch()
     const navigate= useNavigate()

      const HandleRemov = (id)=>{
          dispatch(RemovFromCart(id))
       }
       
    const HandleDetail = (id)=>{
      dispatch(addDetails(id))
      navigate("/details")
      }
  
  return (
<ContainerShoping title="cart">
       {cart.length > 0 ?
        cart.map((i,idx)=>{
            const {id,photo,title,price,inFav,inCart,qun,catogry,model} = i
            return(
                <ul className='d-flex   m-0' key={idx}>
                <li className='col p-1 border text-center text-muted  '>{title}</li>
                <li className='col p-1 border text-center text-muted  '>{catogry}</li>
                <li className='col p-1 border text-center text-muted  '>{model}</li>
                <li className='col p-1 border text-center text-muted  '>{price} <span className='text-success'>$</span></li>
                <li className='col p-1 border text-center text-muted  '>{qun}</li>
                <li className='col p-1 border text-center text-muted '><a onClick={()=>HandleDetail(id)} style={{cursor:"pointer"}} className="mr-3 text-info">detail</a><span style={{cursor:"pointer"}} onClick={()=>HandleRemov(id)} ><i className='fa fa-trash text-danger'></i></span></li>
      
             </ul>
            )
        }):<p className='text-center p-2 mt-3 text-danger'>no items </p>
       }


    </ContainerShoping>
  )
}

export default Cart