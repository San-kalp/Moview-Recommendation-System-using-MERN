const mongoose = require("mongoose");

const movieModel = mongoose.Schema({
  movie_name: {
    type: String,
  },
  poster: {
    type: String,
  },
  director: {
    type: String,
  },
  writer: {
    type: String,
  },
  budget: {
    type: String,
  },
  box_collection: {
    type: String,
  },
  release_date: {
    type: String,
  },
  duration: {
    type: String,
  },
  awards: {
    type: String,
  },
  genere: {
    type: String,
  },
  cast: {
    type: [],
    default: [],
  },
  description: {
    type: String,
    max:3000,
  }
});

module.exports = new mongoose.model("movieModel", movieModel);
