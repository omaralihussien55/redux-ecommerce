import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import { addPlus,addMinus,RemovFromCart } from '../redux/itemSlice'
import { ToastContainer, toast } from 'react-toastify';
const ProductDetail = () => {
  const notify = (c) => toast(c);
  const {cart,details} = useSelector((state)=>state.data)
  const {userLog} = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const navegate = useNavigate()
  

   
  const HandlMinus =(id)=>{
    dispatch(addMinus(id))
  }
  const HandlPlus =(id)=>{
    dispatch(addPlus(id))
  }
 const HandleRemov = (id)=>{
    dispatch(RemovFromCart(id))
    navegate("/cart")

 }
  return (
    <div className='container my-4'>
    <ToastContainer/>
      <h3 className='text-center p-2 mb-3 text-info'>details</h3>
     <div className='row p-2 border'>
          {details.length > 0 ?
            details.map((i,idx)=>{
              const {id,photo,title,price,info,qun} = i
              return(
                <React.Fragment key={idx}>
                <div className='col-11 col-md-6 mx-auto  '>
                <img src={photo} className='w-100 h-100' alt='' />
               </div>
               <div className='col-11 col-md-6 mx-auto  '>
                    <h2 className='mb-2 p-1 '><span className='p-1 mr-2'>phone :</span><span className='p-1 mr-2'>{title}</span></h2>
                    <p className='mb-2 p-1 '><span className='p-1 mr-2'>description :</span><span className='p-1 mr-2'>{info}</span></p>
                    <div className='mb-2 p-1 '><span className='p-1 mr-2'>price :</span><span className='p-1 mr-2'>{price}</span></div>
                    <div className='mb-2 p-1 d-flex'>
                    {qun <= 1 ? <div className='p-1 mr-2 border pls-qun pls-qun-c' style={{pointerEvents:"none"}}>-</div>:
                    <div className='p-1 mr-2 border pls-qun pls-qun-c' onClick={()=>HandlMinus(id)}>-</div>
                  }
                    <div className='p-1 mr-2 border pls-qun '>{qun}</div>
                    <div className='p-1 mr-2 border pls-qun pls-qun-c' onClick={()=>HandlPlus(id)}>+</div>
                    </div>
                    <div className='d-flex mb-2'>
                    <button className='btn btn-primary mr-2' onClick={()=> HandleRemov(id)}>remove From Cart</button>
            
                    </div>
                    </div>
                </React.Fragment>
              )
            }):<p className='text-center p-2 mt-3  text-danger '>no items </p>
          }
     </div>

     <div className='text-center my-3 p-1 '>
     <Link to='/products'   className=' btn btn-primary'>back</Link>
     </div>
    </div>
  )
}

export default ProductDetail