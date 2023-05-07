const express = require("express");
const router = express.Router();

const movieController = require("../controller/movieController");

router.post("/addmovie", movieController.addMovie);

module.exports = router;