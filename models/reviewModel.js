const mongoose = require("mongoose");

const reviewModel = mongoose.Schema({
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movieModel"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    user_email: {
        type: String,
    },
    review: {
        type: String,
    },
    like_count: {
        type: String,
        default: "0",
    },
    dislike_count: {
        type: String,
        default: "0",
    },
});

module.exports = new mongoose.model("reviewModel", reviewModel);