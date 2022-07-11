import React from 'react'
import Search from './Search'

const ProductsContainer = ({children}) => {
  return (
    <div className='container'>
    <Search/>
      <div className='row my-4 p-2'>
           {children}
      </div>
    </div>
  )
}

export default ProductsContainer