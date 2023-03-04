import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';



function Home() {

    let histroy=useNavigate()

    const handleDelete = (id) => {
        // create array of ids
        let index= employee.map(item=>item.id).indexOf(id)
        employee.splice(index,1)
        histroy('/')
    }
    const handleEdit=(id,uname,age,desig,salary)=>{
        localStorage.setItem("id",JSON.stringify(id))
        localStorage.setItem("uname",uname)
        localStorage.setItem("age",JSON.stringify(age))
        localStorage.setItem("desig",desig)
        localStorage.setItem("salary",JSON.stringify(salary))
    }



    return (
        <>
            <h1 className='text-center p-3 mt-3 '>Employee Management System</h1>
            <div className='text-center '>
                <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                <Link to='/add'><Button className='mt-2' variant="success"><i class="fa-solid me-1 fa-user-plus"></i>
                    Add New Employee
                </Button></Link>

                <Table striped bordered hover style={{ margin: '6rem', width: "85%" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee && employee.length > 0 ?
                                employee.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.desig}</td>
                                        <td>{item.salary}</td>
                                        <td>
                                            <Link to='/edit'> <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} variant="info"><i class="fas me-1 fa-edit"></i>Edit</Button>{' '} </Link>
                                            <Button onClick={() => handleDelete(item.id)} className='ms-2' variant="danger"><i class="fa-solid fa-trash-can"></i> Delete</Button>{' '}
                                        </td>
                                    </tr>
                                ))
                                : 'no table data'
                        }


                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Home

//splice - to remove element form array
// indexof - to find index of element in an array
