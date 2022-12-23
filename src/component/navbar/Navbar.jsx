import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[3rem] bg-black flex cursor-pointer p-[2rem]'>
      <div className='h-full w-[50%] flex items-center text-white font-bold text-[1.2rem] justify-center'>History</div>
      <div className='h-full w-[50%] flex items-center text-white font-bold text-[1.2rem] bg-[red] justify-center'>Payload</div>
    </div>
  )
}

export default Navbar
