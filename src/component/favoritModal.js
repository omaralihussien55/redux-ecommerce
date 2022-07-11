import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'

import { Link } from 'react-router-dom'
import { addFav } from '../redux/itemSlice'
import ContainerCarts from './ContainerCarts'

const FavoritModal = () => {
    const {fav} = useSelector((state)=> state.data)
    const dispatch = useDispatch()


    const Handlefav = (id)=>{
    dispatch(addFav(id))
    }
  return (
    <ContainerCarts>
    {
        fav.map((i)=>{
            return(
                <div className='cart d-flex justify-content-between mb-2 border p-2' key={i.id}>
                <div  style={{width:"40px",height:"40px"}}>
                <img src={i.photo} className='w-100 h-100' alt=''/>
                </div>
                 <div>{i.title}</div>
                 <div>
                 <span onClick={()=> Handlefav(i.id)}  style={{cursor:"pointer"}}><i className={i.inFav &&"fa fa-heart text-danger"}></i></span>
                 </div>
              </div>
            )
        })
    }
    <Link to="favorit" className='p-1 text-center text-white d-block'>show all favorit</Link>
        </ContainerCarts>
  )
}

export default FavoritModal