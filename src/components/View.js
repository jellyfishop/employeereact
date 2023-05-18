import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

function View() {

  const [employee,setAllEmployees]=useState({})
  const params=useParams()

  const fetchEmp=async ()=>{
    const result=await axios.get('http://localhost:8000/getAnEmp/' + params.id)
    setAllEmployees(result.data.employee);
  }
  console.log(employee);

  useEffect(()=>{
    fetchEmp()

  },[])
  return (
    <div>


      <Card className='w-25 container p-5'>
        <Card.Img variant="top" src="https://i.postimg.cc/DZ8JrYmw/employeecard.webp" />
        <Card.Body>
          <Card.Title className='text-center'><strong>Name:{employee.uname}</strong></Card.Title>
          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Age:{employee.age}</ListGroup.Item>
          <ListGroup.Item>Role:{employee.role}</ListGroup.Item>
          <ListGroup.Item>salary:{employee.salary}</ListGroup.Item>
        </ListGroup>
       
      </Card>
    </div>
  )
}

export default View