const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");

const server = express();
server.use(express.json());
require("dotenv").config();
server.use(cors());
const PORT = process.env.PORT || 4000;

server.get("/", (req, res) => {
  res.status(200).send("Working Fine :) ");
});

server.use("/api/movies", movieRoutes);
server.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
