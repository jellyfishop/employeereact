import {React,useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Edit() {

  const[id,setId]=useState('')
  const[uname,setName]=useState('')
  const[age,setAge]=useState(0)
  const[role,setRole]=useState('')
  const[salary,setSalary]=useState(0)

  // object for hook
const params=useParams()
// console.log(params.id);

const fetchEmp=async ()=>{
  const result=await axios.get('http://localhost:8000/getAnEmp/' + params.id)
  console.log(result.data.employee);


  setId(result.data.employee.id)
  setName(result.data.employee.uname)
  setAge(result.data.employee.age)
  setRole(result.data.employee.role)
  setSalary(result.data.employee.salary)

  // console.log(id);
  // console.log(role);

}
const location=useNavigate()

const handleUpdate=async (e)=>{
  e.preventDefault()

  const body={
    id,
    uname,
    age,
    role,
    salary
    
  }
  const result=await axios.post('http://localhost:8000/editEmp',body)
  console.log(result);
  alert(result.data.message)
location('/')
}
useEffect(()=>{
  fetchEmp()
},[])


  return (
    <div>
          <div className='text-end mt-4 me-4'>
       
       </div>
       <h1 className='mt-5'>
         <i class="p-3 fa-solid fa-people-group"></i>
         Edit details </h1>
 
       <p className='para'>
         Employee Home connects with your Rippling account and acts as single location for employee happenings, it's like an internal bulletin 
         board (without the post-its). Accessible just by opening a new tab (using Chrome APIs for new tab page or NTP), every employee can instantly see the following:
       </p>
       <div >
  <Form className='p-5  w-75 container'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control  type="text" value={uname}
        onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control  type="text" value={age} 
         onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Role</Form.Label>
        <Form.Control  type="text"  value={role}  
        onChange={(e)=>setRole(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text"  value={salary} 
         onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>

      <Button onClick={(e)=>handleUpdate(e)} className='text-end mt-3' variant="success">Ok</Button>{' '}

      
        </Form>
  </div>
    </div>
    
  )
}

export default Edit