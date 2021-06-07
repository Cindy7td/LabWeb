import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import {db} from "../Config";

export default function TaskForm(props) 
{   
    // Task component with its properties
    const [ tasks,setTasks ] = useState({
        title: '',
        description:'',
        date:'',
        status:''
    });

    // This function handles the changes over the form
    const handleInputChange = e =>{
        const {name,value} = e.target;
        setTasks({...tasks,[name]: value})
    }
    // This function handles the call to the database
    const handlerSubmit = e =>{
        e.preventDefault();
        console.log(tasks)
        addOrEdit(tasks);
    }

    // Conection to database
    const addOrEdit = async (taskNew) =>{
       await db.collection("todos").doc().set(taskNew) 
    }
  
    return (
    <>
     <Container>
     <Form onSubmit= {handlerSubmit}>
        <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Title</Form.Label>
            <Form.Control 
            type="text" 
            name="title" 
            placeholder="Enter Title" 
            onChange= {handleInputChange}
            required 
            />  
        </Form.Group>
        <Form.Group as ={Col} >
            <Form.Label>Description</Form.Label>
            <Form.Control 
            type="text"
            name="description" 
            placeholder="Description"
            onChange= {handleInputChange}  
            required />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Date</Form.Label>
            <Form.Control 
            type="text"
            name="date" 
            onChange= {handleInputChange}
            placeholder="dia/mes/año"  
            required />
        </Form.Group>
        <Form.Group as ={Col} >
            <Form.Label>Status</Form.Label>
            <select name="status" onChange= {handleInputChange}>
                <option selected>Select a status</option>
                <option value="1">ToDo</option>
                <option value="2">Doing</option>
                <option value="3">Done</option>
            </select>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Button variant="outline-danger" type="submit" href="/Projects">
            Back
        </Button>
        <Button variant="outline-success" type="submit">
            Save
        </Button>
        </Form.Row>
    </Form>
    </Container>
    </>
    )
}