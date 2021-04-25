import ProjectCard from "./ProjectCard"
import NavBar from "./NavBar"
import Row from 'react-bootstrap/Row';
import '../App.css';
export default function CatalogProjects() 
{
    return (
    <>
         <NavBar></NavBar>
         <div className="center">
         <h1>Projects</h1>
        
            <Row>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
            </Row>
            <Row>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
            </Row>
            <Row>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
                <ProjectCard name= "hOLA" descrip="somedescrip" status="todo"></ProjectCard>
            </Row>
          
            </div>
    </>
    )
}