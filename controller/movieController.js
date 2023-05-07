const movieModel = require("../models/movieModel");

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
