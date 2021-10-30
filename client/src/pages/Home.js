import { Container } from "react-bootstrap";

import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import axios from "axios";

import Search from "../components/Search";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const BASE_URL = "http://localhost:4000/api/movies";

  const [searchKey, setSearchKey] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    getAllMovies();
  }, []);

  const getMovies = () => {
    if (!isEmpty(searchKey)) {
      setLoading(true);
    } else {
      setErrorMessage("Something Went Wrong.. Please try again later");
    }
  };

  const getAllMovies = async () => {
    setLoading(true);
    const result = await axios.get(BASE_URL + "/all");
    setData(result.data);

    setLoading(false);
  };
  return (
    <Container>
      <Search
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        getMovies={getMovies}
        setLoading={setLoading}
      />
      {loading ? <Loader /> : ""}

      <div className="d-flex flex-wrap justify-content-start">
        {data &&
          data.map((movie) => {
            return <MovieCard data={movie} key={movie.id} />;
          })}
      </div>
    </Container>
  );
}
