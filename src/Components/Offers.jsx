import React from 'react'
import img from '../assets/img/pic6.jpg'
import img1 from '../assets/img/pic2.webp'
import img2 from '../assets/img/pic3.jpg'
import img3 from '../assets/img/img7.jpg'



const Offers = () => {
  return (
    
    <div className='containe mx-auto text-3xl font-bold'>
      <div className='grid p-14 grid-row-6 grid-flow-col md:grid-cols-6 grid-flow-row-dense gap-3'>
         <img src={img} alt='img' className=' h-full object-cover col-span-2 row-span-2 rounded-lg'/>
        <img src={img1} alt='img1' className='h-full object-cover col-span-2 rounded-lg'/>
        <img src={img2} alt='img2' className='h-full object-cover col-span-2 row-span-2 rounded-lg'/>
        <img src={img3} alt='img3' className='h-full object-cover col-span-2 rounded-lg'/>
      </div>
    
      </div>
      
    
  )
}

export default Offers
