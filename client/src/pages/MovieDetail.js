import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Alert, Button, Card, Image } from "react-bootstrap";
import axios from "axios";

import Loader from "../components/Loader";

const MovieDetail = () => {
  const [movieData, setMovieData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { imdbId } = useParams();

  const deleteMovie = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:4000/api/movies/delete/${imdbId}`;
      const result = await axios.delete(url);
      if (result.status === 202) {
        setMovieData({})
        history.push("/");
      } else {
        setErrorMessage("Something Went Wrong");
      }
      console.log(result);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const updateMovie = () =>{
    const url = `/update/${imdbId}`
    history.push(url); 
  }

  const getMovieDetails = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:4000/api/movies/details/${imdbId}`;
      const response = await axios.get(url);
      if (response.status === 201) {
        setMovieData(response.data);
      } else {
        setErrorMessage("Something Went Wrong");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="d-flex flex-column mt-1">
      {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
      {loading && <Loader />}
      {loading ? (
        ""
      ) : (
        <div>
          <div>
            <Card>
              <Image
                className="rounded mx-auto d-block"
                src={movieData.poster}
                alt={movieData.title}
              />
              <div className="text-center">
                <hr className="my-2" />
                <h1>{movieData.title}</h1>
                <p>{movieData.desc}</p>
              </div>
              <hr className="my-2" />
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h6>Imdb Rating : {movieData.imdbRating}</h6>
                  </div>
                  <div className="col">
                    <h6>Director : {movieData.director}</h6>
                  </div>
                  <div className="w-100"></div>
                  <div className="col">
                    <h6>Language : {movieData.language}</h6>
                  </div>
                  <div className="col">
                    <h6>Year : {movieData.year}</h6>
                  </div>
                </div>
                <div className="row">
                  <h5> Writer : {movieData.writer}</h5>
                </div>
              </div>

              <div className="container d-flex flex-row justify-content-evenly py-5">
                <Button variant="primary" onClick={() => history.goBack()}>
                  Go Back
                </Button>

                <Button variant="warning" onClick={updateMovie}>Edit Details</Button>

                <Button variant="danger" onClick={deleteMovie}>
                  Delete Movie
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
