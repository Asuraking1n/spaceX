import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import HistoryCard from '../../component/historycard/HistoryCard'
import { getHistoryDataSerivice } from '../../redux/services'
const Home = () => {
    const dispatch = useDispatch()
    const {historyData} = useSelector(state => state.history)
    console.log(historyData)
    useEffect(()=>{
        dispatch(getHistoryDataSerivice())
    },[])
  return (
    <div className='h-[calc(100vh-3rem)] overflow-scroll w-[100vw] flex-wrap bg-black p-[2rem] flex gap-[5rem] items-center' id='home-cont'>
     
      {
        historyData?.map((data)=>{
          return  <HistoryCard key={data.id} data={data}/>
        })
      }
    </div>
  )
}

export default Home
