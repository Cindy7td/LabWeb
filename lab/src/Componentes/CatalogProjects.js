import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";
import Row from 'react-bootstrap/Row';
import React, {useEffect,useState} from 'react';
import '../App.css';
import { db } from "../Config";
import ProjectForm from "./ProjectForm";

// Container of the user's projects
export default function CatalogProjects() 
{
    const [myProjects,setMyProjects] = useState([])

    // Logic for the database to add projects
    const getList = async () => {   
        await db.collection('projects').onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc) =>{
                docs.push({...doc.data(),id:doc.id});
            });
            setMyProjects(docs);
        });
    };

    useEffect(() => {
        getList();
    }, []);

    // Logic for the database to remove users
    const onDeleteClick = id => {
        if(window.confirm("Are you sure?")){
            db.collection('projects').doc(id).delete();
        }
    }

    return (
    <>
         <NavBar></NavBar>
         <div className="center">
         <div> <h1>Projects Catalog</h1> </div>
            <ProjectForm  ></ProjectForm>
            <div>
            <Row style={{marginLeft:'7px' }}>
            {myProjects.map( project => {
               return <ProjectCard 
                        key={project.id} 
                        myKey={project.id} 
                        name={project.title} 
                        description={project.description}  
                        onDeleteClick={onDeleteClick} ></ProjectCard>
            }
            )}
            </Row>
            </div>
        </div>
    </>
    )
}