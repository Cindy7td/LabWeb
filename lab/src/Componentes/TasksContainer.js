import Tasks from "./Tasks"
import NavBar from "./NavBar"
import Row from 'react-bootstrap/Row';

export default function TasksContainer() 
{
    return (
    <>
        <NavBar></NavBar>
        <div className="center">
         <h1>Tasks</h1>
            <Row>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo" ></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
            </Row>
            <Row>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
            </Row>
            <Row>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
                <Tasks name= "hOLA" descrip="somedescrip" status="todo"></Tasks>
            </Row>
        </div>
    </>
    )
}