import React from 'react'
import SpaceX from '../../images/spaceX.jpeg'
import { IoIosRocket } from 'react-icons/io';
import { BiWorld } from 'react-icons/bi';
import { GiOrbit } from 'react-icons/gi';
import { BsCalendarEventFill } from 'react-icons/bs';
import { FaWeightHanging } from 'react-icons/fa';
const PayloadCard = ({data}) => {
  return (
    <div className='min-h-[24rem] h-auto p-[1rem] w-[18rem] bg-white flex flex-col items-center relative rounded-[10px] shadow-[0px_-1px_26px_-11px_rgba(0,0,0,0.75)]'>
    <img src={SpaceX} alt='spacex' className='h-[7rem] w-[7rem] rounded-[50%] absolute top-[-60px]' />
      <div className='font-bold text-[1.2rem] mt-[4rem] text-center'>{data.payload_id}</div>
      <div className='text-center text-[.8rem] mt-[1rem]' >{data.payload_type}</div>

      <div className='flex px-[.8rem] mt-[2rem] text-[.8rem] items-center w-full'><IoIosRocket className='mr-[.5rem]'/> Manufacturer : <div className='ml-auto'>{data.manufacturer}</div></div>
      <div className='flex px-[.8rem] mt-[1rem] text-[.8rem] items-center w-full'><BsCalendarEventFill className='mr-[.5rem]'/> Customer : <div className='ml-auto'>{data.customers[0]}</div></div>
      <div className='flex px-[.8rem] mt-[1rem] text-[.8rem] items-center w-full'><BiWorld className='mr-[.5rem]'/> Nationality : <div className='ml-auto'>{data.nationality}</div></div>
      <div className='flex px-[.8rem] mt-[1rem] text-[.8rem] items-center w-full'><GiOrbit className='mr-[.5rem]'/> Orbit : <div className='ml-auto'>{data.orbit}</div></div>
      <div className='flex px-[.8rem] mt-[1rem] text-[.8rem] items-center w-full'><FaWeightHanging className='mr-[.5rem]'/> Mass : <div className='ml-auto'>{data.payload_mass_kg >0?data.payload_mass_kg:'Unavilable'}</div></div>
      


    </div>
  )
}

export default PayloadCard
