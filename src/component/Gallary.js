import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { gallry } from '../data/data'

const  OverLay = styled.div`
position:absolute;
bottom:0;
left:0;
height:0%;
width:0%;
background-color:rgb(21, 21, 21,.5);
transition:all .3s;

`
const OverLayContent = styled.div`
height:100%;
width:100%;
display:flex;
`
const Item = styled.div`
flex: 1 0 33%;
position:relative;

&:hover ${OverLay}{
display:block;
height:100%;
width:100%;
}
`
const ItemContent = styled.div`
`

const Image = styled.img`

`
const Gallary = () => {
  return (
    <div className='container my-5'>
       <div className='row'>
        {
            gallry.map((i,idx)=>{

                return(
                    <Item className='' key={idx}>
                    <OverLay>
                    <OverLayContent>
                     <Link to='/artical' className='m-auto d-block border p-2 text-white rounded' >more</Link>
                    </OverLayContent>
                    </OverLay>
                    <ItemContent className='w-100 h-100'>
                      <Image src={i.photo} className="w-100 h-100"  alt=""/>
                    </ItemContent>
                   
                  </Item>
                )
            })
        }      

       </div>
    
    </div>
  )
}

export default Gallary