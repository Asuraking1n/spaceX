import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import PayloadCard from '../../component/payloadCard/PayloadCard'
import { getPayloadDataSerivice } from '../../redux/services'
const Payload = () => {
  const dispatch = useDispatch()
  const {payloadData} = useSelector(state=>state.payload)
  const [searchItem,setSearchItem] = useState('')
  useEffect(()=>{
    dispatch(getPayloadDataSerivice())
  },[dispatch])
  return (
    <div className='h-[calc(100vh-3rem)] w-[100vw] overflow-scroll  p-[2rem]'  id='home-cont'>
    <input type='text' onChange={(e)=>setSearchItem(e.target.value)} placeholder='Search by satelite name' className='h-[2.5rem] w-[100%] text-center rounded-[20px]'/>
      <div className='mt-[5rem] flex flex-wrap gap-[5rem]'>
      {
        payloadData?.slice(0,10).filter((filterData) => filterData.payload_id.toLowerCase().includes(searchItem.toLowerCase()) && filterData )
        .map((payload)=>{
          return <PayloadCard data={payload}/>
        })
      }
      </div>
    </div>
  )
}

export default Payload
