import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import '../App.css';
export default function CatalogProjects() 
{
    return (
    <>
         <NavBar></NavBar>
         <div className="center">
         
         <div> <h1>Projects Catalog</h1> <Button variant="success">Añadir</Button></div>
        <div>
            <Row style={{marginLeft:'7px' }}>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
            </Row>
          
            </div>
            </div>
    </>
    )
}