import React from 'react'

const TableRow = ({row}) => {
  return (
    <tr>
        <td>{row?.name}<img style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'10px'}} src={`${row?.image}`}></img></td>
        <td>{row?.symbol}</td>
        <td>{row?.current_price}</td>
        <td>{row?.market_cap}</td>
        <td>{row?.total_volume}</td>
    </tr>
  )
}

export default TableRow