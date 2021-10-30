import { Card, Button } from "react-bootstrap";

function MovieCard(props) {
  return (
    <Card className="movie-card">
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Button variant="success">View Movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
