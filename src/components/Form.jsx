import React,{useState} from 'react'

const Form=({formdata,setformdata})=> {
    const[date,setDate]=useState('')
    const[item,setitem]=useState('')
    const[qty,setqty]=useState(0)
    const[price,setprice]=useState(0)
    //const[formdata,setformdata]=useState([])
    const handleSubmit=(event)=>{
         event.preventDefault();
         setformdata([...formdata,{
            date,
            item,
            qty,
            price
         }])
     console.log(formdata)
    }
  return (
    <form className='row p-3' >
        <div className='col-3'>
        <input name='date'onChange={(event)=>{
             setDate(event.target.value)
        }} value={date}className="form-control form-control-sm" type="date" placeholder="Date" aria-label=".form-control-sm example"/>
        </div> 
        <div className='col-3'>
        <input name='item'onChange={(event)=>{
            setitem(event.target.value)
        }} value={item}className="form-control form-control-sm" type="text" placeholder="Item" aria-label=".form-control-sm example"/>
        </div> 
        <div className='col-3'>
        <input name='qty'onChange={(event)=>{
            setqty(event.target.value)
        }}value={qty}className="form-control form-control-sm" type="number" min="1" placeholder="quantity" aria-label=".form-control-sm example"/>
        </div>  
        <div className='col-3'>
        <input name='price'onChange={(event)=>{
          setprice(event.target.value)
        }}value={price}className="form-control form-control-sm" type="text" placeholder="fee" aria-label=".form-control-sm example"/>
        </div>  
        <div className='col-3 mx-auto p-3'>
        <button onClick={handleSubmit}className='btn btn-sm btn-success xm-auto' type='button'>Submit</button>
        </div> 
    </form>
  )
}

export default Form