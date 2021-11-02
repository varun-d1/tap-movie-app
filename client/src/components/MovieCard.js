import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <Card className="movie-card text-center">
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Image src={props.data.poster} width="150px" height="200px"/>
        <Card.Text>
          {props.data.desc ? `${props.data.desc.substring(0, 40)}...` : ''}
        </Card.Text>
        <Link to={`/detail/${props.data.imdbId}`}>
        <Button variant="success">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
