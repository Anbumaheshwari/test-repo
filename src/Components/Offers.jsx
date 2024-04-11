import React from 'react'
import img from '../assets/img/pic1.jpg'
import img1 from '../assets/img/pic2.webp'
import img2 from '../assets/img/pic3.jpg'



const Offers = () => {
  return (
    
    <div className='max-w-[1400px] m-auto py-12 px-4 grid lg:grid-cols-3 gap-2'>
      
        <div className='flex flex-initial basis-1/4'>
         
          
           <img className='row-span-2 p-2 rounded-2xl h-[58vh]' src={img} alt='img'/>
       
       <img className='row-span-4 p-2 rounded-2xl grid grid-cols-2  h-[40vh]'src={img1} alt='img1'/>
        <img className='row-span-2 p-2 rounded-2xl h-[90vh]' src={img2} alt='img2'
        />
      </div>
    <div > 
      
         <h1 className='mt-48 mx-4 text-4xl text-white'>Women Collection</h1>
         <button className='flex mt-16 mr-3.5 items-center justify-center rounded-xl bg-gray-200'>
        
          <div className='mt-24'>
          <span className='font-medium  text-black text-4xl text-center'>
          Save 20% off this holiday season using the Code Y2023.
         </span>
         <div className='mt-16 mb-12 '>
         <button className="px-6  py-1 border-2 border-gray-300 hover:border-[#878787] transistion-all rounded-full">
       Special Offer</button>
       </div>
         </div>
       </button>
      </div>
        <div>
        <h1 className='text-4xl text-white mt-96 mx-7'>Girls Top</h1>
        <h2 className='text-white mt-3 mx-7 text-2xl'>Mysterious everyday</h2>
        <button className="px-6 mx-7 mt-8 py-1 border-2 text-white border-gray-300 hover:border-[#878787] transistion-all rounded-full">
       Shop Now</button>
        </div>
       
    </div>
   
    
  )
}

export default Offers
