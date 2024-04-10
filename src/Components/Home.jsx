import React from 'react'
import Button from '../Layout/Button'
import img from '../assets/img/pic1.jpg'



const Home = () => {
  return (
   <div className='mt-14 mx-25 flex flex-col lg:flex-row g:justify-between items-center lg:px-12 bg-gradient-to-r'>
    <div className=' w-full lg:w-2/4'>
        <h1 className='font-semibold text-5xl text-center lg:text-start leading-tight'>
            Simplicity is the ultimate 
            in sophistication
        </h1>
        <div className='mt-5 flex flex-row gap-6 '>
       <Button title='Shop Now'/>
     
      <button className="px-6 py-1 border-2 border-gray-300 hover:border-[#878787] transistion-all rounded-full">
       2023 Lookbook </button>
     </div>
     
      
       </div>
       <div>
       <span className='indent-8 text-xl flex-col'>
       <h1> A contemporary fashion brand that focuses
       on designing and producing</h1> 
       <h1>minimalist,high-quality clothing and accessories.</h1>
       </span>
       </div>
       
      </div>
       
      
       
  )
}

export default Home