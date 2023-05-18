import { React, useEffect, useState } from 'react'
import './Admin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';




function Admin() {
  const [allEmployees,setAllEmployees]=useState([])

  const fetchData = async()=> {
    const result = await axios.get('http://localhost:8000/getAllEmployee')
    setAllEmployees(result.data.employees);
    
  }
 const handleDelete=async (id)=>{
  const result=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
  alert(result.data.message)
  fetchData()
 }


  // console.log(allEmployees);
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className='text-end mt-4 me-4'>
       <Link to={'/add'}>
        <Button variant="success">Add employee <i class="fa-solid fa-user-plus p-1"></i></Button>
        </Link> 
      </div>
      <h1 className='mt-5'>
        <i class="p-3 fa-solid fa-people-group"></i>
        Employee management </h1>

      <p className='para'>
        Employee Home connects with your Rippling account and acts as single location for employee happenings, it's like an internal bulletin board (without the post-its). Accessible just by opening a new tab (using Chrome APIs for new tab page or NTP), every employee can instantly see the following:
      </p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            allEmployees?.map((item,index) => (

              <tr>
              <td>{index+1}</td>
              <td>{item.uname}</td>
              <td>{item.age}</td>
              <td>{item.role}</td>
              <td>{item.salary}</td>
  
              <td>
                <Link to={'edit/'+item.id}>
                <Button  className="me-3" variant='info'>Edit <i class="fa-solid fa-user-pen"></i></Button>
                </Link>
                <Link to={'view/'+item.id}>                
                <Button className="me-3" variant='warning'>View <i class="fa-sharp fa-solid fa-eye"></i></Button>

                </Link>

                <Button onClick={()=>handleDelete(item.id)} className="me-3" variant='danger'>Delete <i class="fa-solid fa-trash"></i></Button>
              </td>
  
            </tr>
            ))
          }
      
          

        </tbody>
      </Table>
    </div>
  )
}

export default Admin