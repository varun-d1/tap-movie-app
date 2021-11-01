import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <Card className="movie-card">
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.desc ? `${props.data.desc.substring(0, 150)}...` : ''}
        </Card.Text>
        <Link to={`/detail/${props.data.imdbId}`}>
        <Button variant="success">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
