import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect,useState } from 'react';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';


function Edit() {

  const [id,setId]=useState(0)
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)

  useEffect(()=>{
  setId(JSON.parse(localStorage.getItem("id")))
  setUname(localStorage.getItem("uname"))
  setAge(JSON.parse(localStorage.getItem("age")))
  setDesig(localStorage.getItem("desig"))
  setSalary(JSON.parse(localStorage.getItem("salary")))


  },[])
  
  var index=employee.map((item)=>item.id).indexOf(id)

  let histroy=useNavigate()
 
  const handleUpdate=(e)=>{
    e.preventDefault()

    
    
    let emp = employee[index]
    emp.name=uname
    emp.age=age
    emp.desig=desig
    emp.salary=salary

    histroy('/')
  }
  // console.log(id);
  // console.log(salary);


  return (
    <div>
      <h1 className='text-center p-3 mt-3 '>Update Details of Employee</h1>
       <div className='text-center'>
       <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
 </div>
 <Container className='mt-5'>
      <Row>
        <Col md={4}>
          <img className='mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8FZaPAXKEpRtw2yz_ZlwfttRGUuRtMCe5Q&usqp=CAU'>
          </img>
        </Col>


        <Col md={8}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee name</Form.Label>
        <Form.Control value={uname}  type="text" onChange={(e)=>setUname(e.target.value)}/>

        <Form.Label>Employee Age</Form.Label>
        <Form.Control value={age} type="text"  onChange={(e)=>setAge(e.target.value)} />

        <Form.Label>Employee Desihnation</Form.Label>
        <Form.Control value={desig} type="text"  onChange={(e)=>setDesig(e.target.value)} />

        <Form.Label>Employee Salary</Form.Label>
        <Form.Control value={salary} type="text"  onChange={(e)=>setSalary(e.target.value)} />
       
      </Form.Group>

     
      <Button onClick={(e)=>handleUpdate(e)} variant="success" type="submit">
        Update
      </Button>
    </Form>
        </Col>

      </Row>
    </Container>

        
      
    </div>
  )
}

export default Edit
