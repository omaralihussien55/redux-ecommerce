import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { filter,search } from '../redux/itemSlice'
const Search = () => {
    const {} = useSelector((state)=> state.data)
     const dispatch = useDispatch()
    const HandleFilter = (e)=>{
      dispatch(filter(e.target.value))
    }
    const HandleSearch = (e)=>{
        dispatch(search(e.target.value))
    }
  return (
    <div className='container mt-3'>
      <div className='row justify-content-between'>
       <div className='col-10 col-md-4'>
       <div className='form-group '>
             <label className='text-muted' >category</label>
          <select  className='form-control ' onChange={HandleFilter} >
            <option value="">select category</option>
            <option value="sumsung">sumsung</option>
            <option value="iphone">iphone</option>
            <option value="lenovo">lenovo</option>
            <option value="tesla" >tesla</option>
          </select>
          </div>
       </div>
       <div className='col-10 col-md-4'>
         <div className='form-group'>
              <label className='text-muted'>search</label>
             <input className='form-control' placeholder='mobile name ' onChange={HandleSearch} />
         </div>
       </div>
     </div>
    </div>
  )
}

export default Search