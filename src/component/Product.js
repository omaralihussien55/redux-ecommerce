import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ProductsContainer from './ProductsContainer'
import { useSelector ,useDispatch} from 'react-redux/es/exports'
import { addFav,addCart,addDetails } from '../redux/itemSlice'

const Product = () => {
 
    const {itemShop} = useSelector((state)=> state.data)
    const {userLog} = useSelector((state)=> state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const HandleFav= (id) =>{
   dispatch(addFav({type:userLog.log,id:id}))
    }

    const HandleAddCart = (id)=>{
      dispatch(addCart({type:userLog.log,id:id}))
    }

    const HandleDetail = (id)=>{
    dispatch(addDetails(id))
    navigate("/details")
    }
  return (
  <ProductsContainer>

  {

   itemShop.map((i,idx)=>{
    const {id,photo,title,price,inFav,inCart} = i

    return(
        <div  className='col-11 col-sm-6 col-md-4  card-content mb-3' key={idx}>
        <div className="card  border-info" >
        <img  className="card-img-top mx-auto my-1 photo" src={photo} alt="Card image cap" style={{width:"50%",height:"200px"}} />
        
        <div className="card-body">
          <h5 className="card-title text-info">{title}</h5>
          <p><span className='mr-1 text-success'>price : </span><span className='mr-1 text-success'>{price} $ </span></p>
        <div className='overlay'>
              <div className='overlay-content'>

              {!userLog.log ? 
                  <div className='btn-card '>
                     <a  className="px-2 py-1 mr-1 border" onClick={()=>HandleFav(id)}><i className={inFav ? 'fa fa-heart text-danger':'fa fa-heart text-success'}></i></a>
                    <a className="px-2 py-1 mr-1 border text-success " onClick={()=> HandleAddCart(id)}><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                    
                  </div>:
                  <div className='btn-card '>
                  <a  className="px-2 py-1 mr-1 border" onClick={()=>HandleFav(id)}><i className={inFav ? 'fa fa-heart text-danger':'fa fa-heart text-success'}></i></a>
                  {inCart ?  <a onClick={()=> HandleDetail(id)}  className="px-2 py-1 mr-1 border text-success "><span>in cart</span></a>
                  :<a className="px-2 py-1 mr-1 border text-success " onClick={()=> HandleAddCart(id)}><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                 }
               </div>
                
                }
              </div>
          </div>
        </div>
        </div> 
        </div>

    )
   })

  }

  </ProductsContainer>
    
  )
}

export default Product