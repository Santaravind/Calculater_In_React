import React from 'react'
import { useState } from 'react';
const Input=({inputVal})=> {
  
  
  return (
    <div className=''>
      <input type="text" 
        className='border-4 border-black text-center 
       content-center p-3 mt-2  calc font-bold max-w-80 w-full  sm:w-1/2 md:w-1/3 lg:w-1/4z'
      placeholder='Enter number' 
      value={inputVal} readOnly />
      
    </div>
  )
}

export default Input
