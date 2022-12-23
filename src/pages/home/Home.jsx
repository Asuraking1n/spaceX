import React,{ useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import HistoryCard from '../../component/historycard/HistoryCard'
import ReactPaginate from 'react-paginate';
import { getHistoryDataSerivice } from '../../redux/services'
const Home = () => {
    const dispatch = useDispatch()
    const {historyData} = useSelector(state => state.history)
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 3


    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(historyData?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(historyData?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,historyData]);

    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % historyData.length;
      setItemOffset(newOffset);
    };
  
    useEffect(()=>{
        dispatch(getHistoryDataSerivice())
    },[dispatch])
  return (
    <div className='h-[calc(100vh-3rem)] overflow-scroll w-[100vw] flex flex-col items-center  p-[2rem] ' id='home-cont'>
     
      <div className='min-h-[80%] max-h-auto flex-wrap flex gap-[5rem]  w-full items-center justify-center'>
      {
        currentItems?.map((data)=>{
          return  <HistoryCard key={data.id} data={data}/>
        })
      }
      </div>
      
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Home
