import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='h-[3rem] bg-black flex cursor-pointer p-[2rem]'>
    <Link to='/' className='h-full w-[50%] flex items-center text-white font-bold text-[1.2rem] justify-center'><div >History</div></Link>
    <Link to='/payload' className='h-full w-[50%] flex items-center text-white font-bold text-[1.2rem] justify-center'><div>Payload</div></Link>
    </div>
  )
}

export default Navbar
