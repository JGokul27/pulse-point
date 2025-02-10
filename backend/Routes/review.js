import express from "express";
import { getAllReviews, createReview } from "../Controllers/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true }); // ✅ Required to access doctorId

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["patient"]), createReview); // ✅ Ensure correct middleware order

export default router;
