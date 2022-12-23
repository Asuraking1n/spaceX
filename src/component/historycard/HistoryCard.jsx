import React from 'react'
import SpaceX from '../../images/spaceX.jpeg'
import { IoIosRocket } from 'react-icons/io';
import { RiArticleFill } from 'react-icons/ri';
import { BsCalendarEventFill } from 'react-icons/bs';
import { FaWikipediaW,FaRedditAlien } from 'react-icons/fa';
const HistoryCard = ({data}) => {
  return (
    <div className='min-h-[24rem] h-auto p-[1rem] w-[18rem] bg-white flex flex-col items-center relative rounded-[10px] shadow-[0px_-1px_26px_-11px_rgba(0,0,0,0.75)]'>
    <img src={SpaceX} alt='spacex' className='h-[7rem] w-[7rem] rounded-[50%] absolute top-[-60px]' />
      <div className='font-bold text-[1.2rem] mt-[5rem] text-center'>{data.title}</div>
      <div className='text-center text-[.8rem] mt-[1rem]' >{data.details.slice(0,90)}...</div>

      <div className='flex px-[.8rem] mt-[2rem] text-[.8rem] items-center w-full'><IoIosRocket className='mr-[.5rem]'/> Flight No : <div className='ml-auto'>{data.flight_number}</div></div>
      <div className='flex px-[.8rem] text-[.8rem] items-center w-full'><BsCalendarEventFill className='mr-[.5rem]'/> Event Date : <div className='ml-auto'>{data.event_date_utc.slice(0,10)}</div></div>
      

      <div className='flex w-full items-center justify-around mt-[2rem]'>
        <a href={data.links.wikipedia} target='_blank'><div className='flex items-center justify-center h-[2.5rem] w-[2.5rem] rounded-[50%] bg-black'><FaWikipediaW className='text-white '/></div></a>
        <a href={data.links.reddit} target='_blank'><div className='flex items-center justify-center h-[2.5rem] w-[2.5rem] rounded-[50%] bg-black'><FaRedditAlien className='text-white '/></div></a>
        <a href={data.links.article} target='_blank'><div className='flex items-center justify-center h-[2.5rem] w-[2.5rem] rounded-[50%] bg-black'><RiArticleFill className='text-white '/></div></a>
      </div>
    </div>
  )
}

export default HistoryCard
