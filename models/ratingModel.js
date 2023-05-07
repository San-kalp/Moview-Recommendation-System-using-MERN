const mongoose = require("mongoose");

const ratingModel = mongoose.Schema({
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movieModel"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    rating: {
        type: String,
    },
});

module.exports = new mongoose.model("ratingModel", ratingModel);