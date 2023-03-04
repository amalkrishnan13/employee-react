import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState('')

  let history=useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    // console.log(ids);
    let uniqueid= ids.slice(0,8)
    
    employee.push(
      {
        id:uniqueid,
        name:uname,
        age:age,
        desig:desig,
        salary:salary

      }
    )
    history('/')

  }

  return (
    <div>
      <h1 className='text-center p-3 mt-3 '>Add Details of Employee</h1>
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
                <Form.Control type="text" required
                 onChange={(e)=>setUname(e.target.value)}
                />

                <Form.Label>Employee Age</Form.Label>
                <Form.Control type="text" required
                 onChange={(e)=>setAge(e.target.value)}
                />

                <Form.Label>Employee Desihnation</Form.Label>
                <Form.Control type="text" required
                 onChange={(e)=>setDesig(e.target.value)}
                />

                <Form.Label>Employee Salary</Form.Label>
                <Form.Control type="text" required
                onChange={(e)=>setSalary(e.target.value)}
                />

              </Form.Group>


              <Button
                onClick={(e)=>handleAdd(e)}
                variant="success" type="submit">
                Add
              </Button>
            </Form>
          </Col>

        </Row>
      </Container>


    </div>
  )
}

export default Add

//to generate unique ids -- uuid
