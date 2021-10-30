module.exports = (Sequelize, DataTypes) => {
  const Movies = Sequelize.define(
    "Movies",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      imdbId: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      year: {
        type: DataTypes.STRING,
      },
      director: {
        type: DataTypes.STRING,
      },
      writer: {
        type: DataTypes.STRING,
      },
      poster: {
        type: DataTypes.STRING,
      },
      language: {
        type: DataTypes.STRING,
      },
      imdbRating: {
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: false,
      modelName: "Movies",
      tableName: "movies",
    }
  );
  return Movies;
};
