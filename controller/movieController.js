const movieModel = require("../models/movieModel");
const ratingModel = require("../models/ratingModel");

exports.addMovie = async (req, res) => {
  try {
    const movie_name = req.body.movie_name;
    const poster = "";
    const director = req.body.director;
    const writer = req.body.writer;
    const budget = req.body.budget;
    const box_collection = req.body.box_collection;
    const release_date = req.body.release_date;
    const duration = req.body.duration;
    const awards = req.body.awards;
    const genere = req.body.genere;
    const cast = req.body.cast;
    const description = req.body.description;

    const result = await movieModel.create({
      movie_name,
      poster,
      director,
      writer,
      budget,
      box_collection,
      release_date,
      duration,
      awards,
      genere,
      cast,
      description,
    });

    if (result) {
      return res
        .status(200)
        .json({ status: true, message: "Movie added successfully" });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "Some error occuredd" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.rateMovie = async (req, res) => {
  try {
    const { movie_id, rating } = req.body;
    const user_id = req.user._id.toString();

    // update movie db
    // also need to write logic for rating system
    await movieModel.findOneAndUpdate({_id: movie_id}, {$set: {rating}});

    // if data present then update it
    const data = await ratingModel.findOne({ movie_id, user_id });
    if (data) {
      const result = await ratingModel.findOneAndUpdate(
        { movie_id, user_id },
        {
          $set: {
            rating,
          },
        }
      );
      if (result) {
        return res
          .status(200)
          .json({ status: true, message: "Rating added successfully" });
      } else {
        return res.status(400).json({ message: "Some error occured" });
      }
    }

    // insert data if not present in db
    const result = await ratingModel.create({
      movie_id,
      user_id,
      rating,
    });

    if (result) {
      return res
        .status(200)
        .json({ status: true, message: "Rating added successfully" });
    } else {
      return res.status(400).json({ message: "Some error occured" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getHighRatedMovies = async (req, res) => {
  try {
    const result = await movieModel.find().sort({ rating: -1 });
    if (result) {
      return res.status(200).json({ status: true, data: result });
    } else {
      return res.status(400).json({ status: false, data: null });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await movieModel.findOne({ _id: id });
    if (result) {
      return res.status(200).json({ status: true, data: result });
    } else {
      return res.status(400).json({ status: false, data: null });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getMovieRatedByUser = async (req, res) => {
  try {
    const movie_id = req.params.mid;
    const user_id = req.user._id.toString();

    const result = await ratingModel.findOne({ movie_id, user_id });
    if (result) {
      return res.status(200).json({ status: true, data: result });
    } else {
      return res.status(400).json({ status: false, data: null });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};
