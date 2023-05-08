const mongoose = require("mongoose");

const commentsModel = mongoose.Schema(
    {
        review_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "reviewModel"
        },
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
        comment: {
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
    }
  );
  
  module.exports = new mongoose.model("commentsModel", commentsModel);
  