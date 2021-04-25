import Card from 'react-bootstrap/Card';

export default function  ProjectCard(props) 
{
    return (
        <Card style={{ width: '18rem', margin: '10px'}}>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.status}</Card.Subtitle>
            <Card.Text>
            {props.descrip}
            </Card.Text>
            <Card.Link href="#">Next</Card.Link>
        </Card.Body>
        </Card>
    )
}