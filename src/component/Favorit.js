import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ContainerShoping from './ContainerShoping'
import { addFav,addCart,addDetails } from '../redux/itemSlice'
const Favorit = () => {
    const {fav} = useSelector((state)=> state.data)
    const {userLog} = useSelector((state)=> state.user)
    const dispatch = useDispatch()
   const navigate= useNavigate()

    const HandleRemov = (id)=>{
        dispatch(addFav({type:userLog.log,id:id}))
     }
     const HandleAddCart =(id)=>{
     dispatch(addCart({type:userLog.log,id:id}))
     }

     const HandleDetail = (id)=>{
        dispatch(addDetails(id))
        navigate("/details")
        }
  return (
   <ContainerShoping title="favorit">
   {fav.length > 0 ? 
    fav.map((i,idx)=>{
        const {id,photo,title,price,inFav,inCart,qun,catogry,model} = i
        return(
            <ul className='d-flex   m-0' key={idx}>
            <li className='col p-1 border text-center text-muted  '>{title}</li>
            <li className='col p-1 border text-center text-muted  '>{catogry}</li>
            <li className='col p-1 border text-center text-muted  '>{model}</li>
            <li className='col p-1 border text-center text-muted  '>{price}</li>
            <li className='col p-1 border text-center text-muted  '>{qun}</li>
            <li className='col p-1 border text-center text-muted '>{inCart ?  <a onClick={()=>HandleDetail(id)}  className="px-2 py-1 mr-1  text-success "><span>in cart</span></a>
            :<a className="px-2 py-1 mr-1 border text-success " onClick={()=> HandleAddCart(id)}><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
           }<span style={{cursor:"pointer"}} onClick={()=>HandleRemov(id)} ><i className='fa fa-trash text-danger'></i></span></li>
  
         </ul>
        )
    }):<p className='text-center p-2 mt-3  text-danger'>no items </p>
   }
   </ContainerShoping>
  )
}

export default Favorit