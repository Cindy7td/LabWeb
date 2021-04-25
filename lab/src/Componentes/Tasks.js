import Card from 'react-bootstrap/Card';

export default function  Tasks(props) 
{
    return (
        <Card style={{ width: '18rem', margin: '10px'}} border= "warning ">
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.status}</Card.Subtitle>
            <Card.Text>
            {props.descrip}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}