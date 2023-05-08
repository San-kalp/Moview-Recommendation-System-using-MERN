const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const reviewController = require("../controller/reviewController");

router.get("/getallreviewsbymovie/:id", reviewController.getAllReviewsByMoview);
router.get("/getrepliesbyreviewid/:mid/:rid", reviewController.getRepliesByReviewId);
router.post("/addreview", auth, reviewController.addReview);
router.post("/addcomment", auth, reviewController.addComment);

// like and dislike routes
router.post("/like", auth, reviewController.like);
router.post("/dislike", auth, reviewController.dislike);
router.post("/likereply", auth, reviewController.likereply);
router.post("/dislikereply", auth, reviewController.dislikereply);


module.exports = router;