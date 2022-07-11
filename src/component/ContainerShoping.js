import React from 'react'
import { Link } from 'react-router-dom'
const ContainerShoping = ({children,title}) => {
  return (
    <div className='container mt-3'>
    <h4 className='text-center p-2 text-info'>{title}</h4>
       <ul className='d-flex  m-0 '>
          <li className='col p-1 border text-center font-weight-bolder text-info'>mobile</li>
          <li className='col p-1 border text-center font-weight-bolder text-info '>category</li>
          <li className='col p-1 border text-center font-weight-bolder text-info'>model</li>
          <li className='col p-1 border text-center font-weight-bolder text-info'>price</li>
          <li className='col p-1 border text-center font-weight-bolder text-info'>qun</li>
          <li className='col p-1 border text-center font-weight-bolder text-info '><span  className='mr-3 '>edit cart</span><span className=''>remove</span></li>
       </ul>
       {children}

       <div className='text-center p-1 my-5'>
       <Link  to='/products' className='btn btn-primary'>back</Link>
       </div>
</div>
  )
}

export default ContainerShoping