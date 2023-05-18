import axios from 'axios';
import {React,useEffect,useState }from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import { Link,useNavigate } from 'react-router-dom';




function Add() {
  const[id,setId]=useState('')
  const[uname,setName]=useState('')
  const[age,setAge]=useState(0)
  const[role,setRole]=useState('')
  const[salary,setSalary]=useState(0)


  useEffect(()=>{
    setId(uuid().slice(0,3))
  },[])
  // console.log(uname);

   // create objec for te hook
   let location=useNavigate()


  const addEmployee=async(e)=>{
    // prvent multiple refreshing the onclick function

    e.preventDefault()

    setId(uuid().slice(0,3));
    const body={
      id,
      uname,
      age,
      role,
      salary
    }

const result=await axios.post('http://localhost:8000/addEmployee',body)
alert(result.data.message)
// redirect to home page
 location('/')
  
  }
  
  return (
    <div>
        <div className='text-end mt-4 me-4'>
       
      </div>
      <h1 className='mt-5'>
        <i class="p-3 fa-solid fa-people-group"></i>
        Add new Employee  </h1>

      <p className='para'>
        Employee Home connects with your Rippling account and acts as single location for employee happenings, it's like an internal bulletin board (without the post-its). Accessible just by opening a new tab (using Chrome APIs for new tab page or NTP), every employee can instantly see the following:
      </p>


  <div >
  <Form className='p-5  w-75 container'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={(e)=>setAge(e.target.value)} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Role</Form.Label>
        <Form.Control onChange={(e)=>setRole(e.target.value)} type="text"  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Salary</Form.Label>
        <Form.Control onChange={(e)=>setSalary(e.target.value)} type="text"  />
      </Form.Group>

      <Button onClick={(e)=>addEmployee(e)} className='text-end mt-3' variant="success">Add</Button>{' '}

      
     <Link to={'/'}>
     <Button className='text-end mt-3' variant="warning">Cancel</Button>{' '}</Link> 


    </Form>
  </div>
    




    </div>
  )
}

export default Add