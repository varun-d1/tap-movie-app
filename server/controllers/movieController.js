const { isEmpty } = require("lodash");
const db = require("../models");
const { Movies } = db;
const { Op } = require("sequelize");


// Add New Movie to Database
const addMovie = async (req, res) => {
  await Movies.sync({ alter: true });

  try {
    const {
      imdbId,
      title,
      year,
      director,
      writer,
      poster,
      language,
      imdbRating,
    } = req.body;

    if (!(imdbId && title && year && imdbRating)) {
      return res
        .status(400)
        .json({ status: false, message: "Please Enter All Mandatory Fields" });
    }

    try {
      const existImdbId = await Movies.findOne({ where: { imdbId: imdbId } });

      if (existImdbId) {
        return res.status(400).json({
          status: false,
          message: "imdbId is already available in database",
        });
      }
    } catch (err) {
      console.log(err);
    }

    const addMovieResult = await Movies.create({
      imdbId,
      title,
      year,
      director,
      writer,
      poster,
      language,
      imdbRating,
    });
    res.status(201).json(addMovieResult);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: false, message: "Something went wrong.. Contact Admin" });
  }
};

// Get all Movies from database
const getMovies = async (req, res) => {
  try {
    const data = await Movies.findAll({});
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: false, message: "Something went wrong.. Contact Admin" });
  }
};

// // Get Single movie Detail using imdbId
const getSingleMovie = async (req, res) => {
  try {
    const { imdbId } = req.params;
    if (!isEmpty(imdbId)) {
      const data = await Movies.findOne({ where: { imdbId: imdbId } });
      if (!isEmpty(data)) {
        return res.status(201).json(data);
      } else {
        return res
          .status(404)
          .json({ status: false, message: "Given imdbId ID is not found" });
      }
    } else {
      return res.status(400).json({
        status: false,
        message: "imdbId is Mandatory field, Please enter imdbId",
      });
    }
  } catch {
    console.log(err);
    res
      .status(400)
      .json({ status: false, message: "Something went wrong.. Contact Admin" });
  }
};

// // Update Single Movie Using imdbId
const updateMovie = async (req, res) => {
  try {
    const { imdbId } = req.params;
    if (!isEmpty(imdbId)) {
      if (!isEmpty(req.body)) {
        const data = await Movies.findOne({ where: { imdbId } });
        if (!isEmpty(data)) {
          const updatedData = await Movies.update(req.body, {
            where: { imdbId },
          });
          res.status(202).json(updatedData);
        } else {
          return res
            .status(404)
            .json({ status: false, message: "Given imdbId ID is not found" });
        }
      } else {
        return res.status(204).json({
          status: false,
          message:
            "Updating fields data is required and should be send through body",
        });
      }
    } else {
      return res.status(400).json({
        status: false,
        message: "imdbId is Mandatory field, Please enter imdbId",
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: false, message: "Something went wrong.. Contact Admin" });
  }
};

// // Delete Movie Using imdbId
const deleteMovie = async (req, res) => {
  try {
    const { imdbId } = req.params;
    if (!isEmpty(imdbId)) {
      const data = await Movies.findOne({ where: { imdbId: imdbId } });
      if (!isEmpty(data)) {
        const updatedData = await Movies.destroy({ where: { imdbId } });
        res.status(202).json({
          status: true,
          message: `Given imdbId ${imdbId} data deleted successfully`,
        });
      } else {
        return res
          .status(404)
          .json({ status: false, message: "Given imdbId ID is not found" });
      }
    } else {
      return res.status(400).json({
        status: false,
        message: "imdbId is Mandatory field, Please enter imdbId",
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: false, message: "Something went wrong.. Contact Admin" });
  }
};

// Search Movie
const searchMovie =async (req,res) => {
  try {
    const { key } = req.params;
    if (!isEmpty(key)) {
      const searchData = await Movies.findAll({
        where: { title: { [Op.iLike]: `${key}` } },
      });
      console.log(searchData)
      if(!isEmpty(searchData)){
        return res
        .status(200)
        .json(searchData);
      }
    } else {
      return res.status(404).json({
        status: false,
        message: "Search Key is Not Found",
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: false, message: "Something went wrong.. Contact Admin" });
  }
};

module.exports = {
  addMovie,
  getMovies,
  getSingleMovie,
  updateMovie,
  deleteMovie,
  searchMovie
};
