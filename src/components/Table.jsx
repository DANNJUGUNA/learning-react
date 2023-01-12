import React from 'react'

const Table=({formdata}) =>{
    
  return (
    <table className='table table-striped table-hover'>
        <thead>
            <tr>
                <th>Date</th>
                <th>Item</th>
                <th>qty</th>
                <th>fee</th>
            </tr>
        </thead>
        <tbody>
           {
            formdata.map((item,index)=>{
                return <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.item}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                </tr>
            })
           }
        </tbody>

    </table>
  )
}

export default Table