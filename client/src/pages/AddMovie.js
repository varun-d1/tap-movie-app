import { Card, Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { size } from "lodash";

function AddMovie() {
  const [formValues, setFormValues] = useState({});

  const onChangeFormField = async (event) => {
    const { value, name, type } = event.target;

    await setFormValues({
      ...formValues,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const onClickSubmit = () => {
    console.log(size(formValues));
    if (size(formValues) === 8) {
      console.log("Adding Movie");
    }
  };

  return (
    <Container className="mt-2">
      <Card>
        <Card.Header>
          <h4 className="text-center">Add New Movie</h4>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Movie imdbId</Form.Label>
            <Form.Control
              type="text"
              name="imdbId"
              onBlur={onChangeFormField}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control type="text" name="title" onBlur={onChangeFormField} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>Movie Release Year</Form.Label>
            <Form.Control
              type="text"
              name="year"
              onChange={onChangeFormField}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>Movie Director</Form.Label>
            <Form.Control
              type="text"
              name="director"
              onChange={onChangeFormField}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>Movie Writer</Form.Label>
            <Form.Control
              type="text"
              name="writer"
              onChange={onChangeFormField}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>Movie Poster Url</Form.Label>
            <Form.Control
              type="text"
              name="poster"
              onChange={onChangeFormField}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>Movie Language</Form.Label>
            <Form.Control
              type="text"
              name="language"
              onChange={onChangeFormField}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>IMDB Rating</Form.Label>
            <Form.Range
              name="imdbRating"
              min="0"
              max="10"
              step="1"
              onChange={onChangeFormField}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={onClickSubmit}>
            Submit
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddMovie;
