import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'

import CartModal from './CartModal'
import FavoritModal from './favoritModal'
import { showRigster,showLogin ,logOut} from '../redux/userSlice'
const Navbar = () => {
  const {fav,cart} = useSelector((state)=> state.data)
  const {userLog} = useSelector((state)=> state.user)

  const dispatch = useDispatch();
  const HandleRegister = ()=>{
    dispatch(showRigster())
   } 
     
   const HandleLogin = ()=>{
    dispatch(showLogin())
   } 

  const  HandleLogOut=()=>{
    dispatch(logOut())
  }
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='/' className="navbar-brand" href="">SHOP-O</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="products">products</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            pages
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">blogs</a>
            <a className="dropdown-item" href="#">contact</a>
            <a className="dropdown-item" href="#">about</a>
            <Link to='/artical' className="dropdown-item" >articals</Link>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">FAQs</a>
          </div>
        </li>
    
      </ul> 
    <div>
      {userLog&& userLog.log ? (
        <ul className='navbar-nav'>
        <li className='nav-item  mr-1 cart-parent '>
           <Link to="favorit"  className='nav-link text-danger border p-1 mb-2'>
           <span className="badge text-white">{fav &&fav.length}</span>
           <span className='badge'><i className='fa fa-heart '></i></span>
          
           </Link>
           {fav&&fav.length > 0 && <FavoritModal/>}
        </li>

        <li className='nav-item  mr-1 cart-parent '>
            <Link to='cart' className='nav-link text-info border p-1 mb-2'>
            <span className="badge text-white  ">{cart&&cart.length}</span>
            <span className='badge'><i className="fa fa-shopping-cart  " aria-hidden="true"></i></span>
            </Link>
            {cart&&cart.length > 0 &&  <CartModal/>}
           
        </li>
        <li className='nav-item  mr-1 cart-parent '>
        <Link to='user' className='nav-link text-info border p-1 mb-2' onClick={HandleLogOut}>
        <span className='badge'>logOut</span>
    </Link>
    </li>
     </ul>
      ):(

        <ul className='navbar-nav'>
        <li className='nav-item  mr-1 cart-parent '>
        <Link to='user' className='nav-link text-info border p-1 mb-2'  onClick={HandleRegister}>
        <span className='badge'>register</span>
    </Link>
    </li>
        <li className='nav-item  mr-1 cart-parent '>
            <Link to='user' className='nav-link text-info border p-1 mb-2' onClick={HandleLogin}>
            <span className='badge'>login</span>
        </Link>
        </li>
     </ul>

      )}
    </div>
    </div>
  </nav>
    
    </React.Fragment>
  )
}

export default Navbar