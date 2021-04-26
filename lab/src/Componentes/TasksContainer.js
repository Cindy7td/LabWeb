import Tasks from "./Tasks"
import NavBar from "./NavBar"
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
export default function TasksContainer() 
{
    return (
    <>
        <NavBar></NavBar>
        <div className="center">
           
            <div> <h1>Tasks</h1> <Button variant="success">Añadir</Button></div>
            <div>
            <Row>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
           
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
           
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" date="20/10/2021"status="todo" ></Tasks>
           
            </Row>
            </div>
        </div>
    </>
    )
}