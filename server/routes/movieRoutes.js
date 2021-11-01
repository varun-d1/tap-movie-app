const express = require("express");
const { isEmpty } = require("lodash");

const {
  addMovie,
  getMovies,
  getSingleMovie,
  updateMovie,
  deleteMovie,
  searchMovie,
} = require("../controllers/movieController");

const movieRoutes = express.Router();

//POST method to add a new movie
movieRoutes.post("/add", addMovie);

// GET method to get All movies from database
movieRoutes.get("/all", getMovies);

// GET method to get Single movie details
movieRoutes.get("/details/:imdbId", getSingleMovie);

// PATCH Method to update movie by using imdbId
movieRoutes.patch("/update/:imdbId", updateMovie);

// DELETE method to delete movie by using imdbID
movieRoutes.delete("/delete/:imdbId", deleteMovie);

// GET method to Search movie by using key
movieRoutes.get("/search/:key", searchMovie);

module.exports = movieRoutes;
