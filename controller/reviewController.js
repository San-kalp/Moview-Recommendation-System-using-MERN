const commentsModel = require("../models/commentsModel");
const reviewModel = require("../models/reviewModel");

exports.addReview = async (req, res) => {
  try {
    const { movie_id, post, user_email } = req.body;
    const user_id = req.user._id.toString();

    const result = await reviewModel.create({
      movie_id,
      user_id,
      user_email,
      review: post,
    });

    if (result) {
      return res
        .status(200)
        .json({ status: true, message: "Review Added successfully" });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "Some error occured" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getAllReviewsByMoview = async (req, res) => {
  try {
    const movie_id = req.params.id;
    const result = await reviewModel.find({ movie_id });

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

exports.addComment = async (req, res) => {
  try {
    const { movie_id, user_id, review_id, user_email, comment } = req.body;

    const result = commentsModel.create({
      review_id,
      movie_id,
      user_id,
      user_email,
      comment,
    });

    if (result) {
      return res
        .status(200)
        .json({ status: true, message: "Your comment is added" });
    } else {
      return res.status(400).json({
        status: false,
        message: "Some error occured comment not added",
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getRepliesByReviewId = async (req, res) => {
  try {
    const movie_id = req.params.mid;
    const review_id = req.params.rid;

    const result = await commentsModel.find({ review_id, movie_id });
    if (result) {
      return res.status(200).json({ status: true, data: result });
    } else {
      return res.status(200).json({ status: false, data: null });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.like = async (req, res) => {
  try {
    const { movie_id, review_id } = req.body;

    const likeResult = await reviewModel.findOne({
      _id: review_id,
      movie_id: movie_id,
    });
    let like_count = parseInt(likeResult.like_count) + 1;

    const result = await reviewModel.findOneAndUpdate(
      {
        _id: review_id,
        movie_id: movie_id,
      },
      { like_count }
    );
    if (result) {
      return res.status(200).json({ status: true });
    } else return res.status(200).json({ status: false });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.dislike = async (req, res) => {
  try {
    const { movie_id, review_id } = req.body;

    const dislikeResult = await reviewModel.findOne({
      _id: review_id,
      movie_id: movie_id,
    });

    let dislike_count = parseInt(dislikeResult.dislike_count) + 1;

    const result = await reviewModel.findOneAndUpdate(
      {
        _id: review_id,
        movie_id: movie_id,
      },
      { dislike_count }
    );
    if (result) {
      return res.status(200).json({ status: true });
    } else return res.status(200).json({ status: false });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.likereply = async (req, res) => {
  try {
    const { movie_id, review_id, user_id } = req.body;

    const likeResult = await commentsModel.findOne({
      review_id,
      movie_id,
      user_id,
    });
    let like_count = parseInt(likeResult.like_count) + 1;

    const result = await commentsModel.findOneAndUpdate(
      {
        review_id,
        movie_id,
        user_id,
      },
      { like_count }
    );
    if (result) {
      return res.status(200).json({ status: true });
    } else return res.status(200).json({ status: false });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.dislikereply = async (req, res) => {
  try {
    const { movie_id, review_id, user_id } = req.body;

    const dislikeResult = await commentsModel.findOne({
      review_id,
      movie_id,
      user_id,
    });
    let dislike_count = parseInt(dislikeResult.dislike_count) + 1;

    const result = await commentsModel.findOneAndUpdate(
      {
        review_id,
        movie_id,
        user_id,
      },
      { dislike_count }
    );
    if (result) {
      return res.status(200).json({ status: true });
    } else return res.status(200).json({ status: false });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};
