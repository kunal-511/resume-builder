import React from 'react'

const Loader: React.FC = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-white relative'>
    <div className='w-[200px] h-[200px] border-4 animate-rotate1 circle absolute border-b-8 border-pink-500'></div>
    <div className='w-[200px] h-[200px] border-4 animate-rotate2 circle absolute border-b-8 border-sky-400'></div>
    <div className='w-[200px] h-[200px] border-4 animate-rotate3 circle absolute border-b-8 border-lime-400'></div>
    <span className='text-black text-xl'>Generating.....</span>
  </div>
  
  )
}

export default Loader
