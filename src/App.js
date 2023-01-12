
import React,{useState} from 'react';
import Form from './components/Form';
import Table from './components/Table';
import Navbar from './components/Navbar';

function App() {
  const[formdata,setformdata]=useState([])
  return(
    <>
    <div className='container'>
    <Navbar/>
    <Form formdata={formdata} setformdata={setformdata}/>
    <Table formdata={formdata}/>
    </div>
    </>
  )
}

export default App;
