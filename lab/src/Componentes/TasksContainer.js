import Tasks from "./Tasks";
import NavBar from "./NavBar";
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react"; 
import { db } from "../Config";
import TaskForm from "./TaskForm"; 
import { useHistory } from 'react-router-dom';

// Handling how to add a task
export default function TasksContainer() 
{
    // Tasks component with its properties
    const [mytasks,setMytasks] = useState([])

    // Handles the changes over the database to reflect on to the page 
    const getLinks = async () => {
        
        await db.collection('todos').onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc) =>{
                docs.push({...doc.data(),id:doc.id});
            });
            setMytasks(docs);
        }); 
    };

    useEffect(() => {
        getLinks();
    },[]);

    // Handlers deletes on the database
    const onDeleteClick = id => {
        if(window.confirm("Are you sure?")){
            db.collection('todos').doc(id).delete();
            
        }
    }
    
    return (
    <>
        <NavBar></NavBar>
        <div className="center">
            <div> <h1>Tasks</h1> 
            <TaskForm></TaskForm>
            </div>
            <div>
            <Row style={{marginLeft:'8px'}}>
                {mytasks.map( task =>{
                 return <Tasks 
                    key={task.id} 
                    myKey={task.id} 
                    name={task.title} 
                    descript={task.description} 
                    date={task.date} 
                    status={task.status} 
                    onDeleteClick={onDeleteClick}
                    ></Tasks>
                    }
                )}
            </Row>
            </div>
        </div>
    </>
    )
}