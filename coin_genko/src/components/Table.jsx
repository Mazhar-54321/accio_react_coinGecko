import React, { useEffect, useState } from 'react'
import TableRow from './TableRow';

const Table = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
  const fetchData = (api)=>{
    fetch(api).then((res)=>res.json()).then((res)=>setData(res))
  }
  fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  },[])  
  return (
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Symbol</th>
                <th>Current Price</th>
                <th>Market Cap</th>
                <th>Total Volume</th>
            </thead>
            <tbody>
                {
                    data?.map((row)=><TableRow row={row} />)
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table