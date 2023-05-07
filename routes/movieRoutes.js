const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const movieController = require("../controller/movieController");

router.get("/gethighratedmovies", movieController.getHighRatedMovies);
router.get("/getmoviebyid/:id", movieController.getMovieById);
router.get("/getmovieratedbyuser/:mid", auth, movieController.getMovieRatedByUser);
router.post("/addmovie", movieController.addMovie);
router.post("/ratemovie", auth, movieController.rateMovie);

module.exports = router;