const Sequelize = require("sequelize");
require("dotenv").config();

const PG_URI = process.env.PG_URI;
const sequelize = new Sequelize(PG_URI, {
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Movies = require("./Movies.js")(sequelize, Sequelize);

module.exports = db;
