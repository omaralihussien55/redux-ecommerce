import React from 'react'
import { ToastContainer} from 'react-toastify';
import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Product from './component/Product'
import ProductDetail from './component/productDetail'
import Cart from './component/Cart'
import Home from './component/Home'
import Favorit from './component/Favorit'
import User from './component/User'
import Footer from './component/Footer';
import Article from './component/Article';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <ToastContainer autoClose={2000} position="top-center"/>
    <div className='body'>
      <Routes>
      <Route index element={<Home/>} />
         <Route  path='/products' element={<Product/>} />
         <Route path='/details' element={<ProductDetail/>} />
         <Route path='cart' element={<Cart/>} />
         <Route  path='favorit' element={<Favorit/>}/>
         <Route  path='user' element={<User/>}/>
         <Route  path='/artical' element={<Article/>}/>
      </Routes>
      </div>
<Footer/>
    </BrowserRouter>
    
    
    </div>
  )
}

export default App