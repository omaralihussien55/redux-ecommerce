import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark p-2 mt-4'>
      <div className='container'>
        <ul className='mb-2 p-1 d-flex justify-content-center'>
          <li class="m-1 p-1 "><a href="https://www.facebook.com/profile.php?id=100006160620281" target="_blank"><i class="fab fa-facebook-f text-primary "></i></a></li>
          <li class="m-1 p-1 "><a href="https://github.com/omaralihussien55" target="_blank"><i class="fab fa-github-square text-white"></i></a></li>
          <li class="m-1 p-1 "><a href="https://www.linkedin.com/in/omar-ali-22a43222a" target="_blank"><i class="fab fa-linkedin text-info "></i></a></li>
        
        </ul>
        <div className='mb-2 p-1 text-white text-center'>created by omar ali</div>
       </div>
    </div>
  )
}

export default Footer