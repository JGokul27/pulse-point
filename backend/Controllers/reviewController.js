import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    res
      .status(200)
      .json({ success: true, message: "Successfull", data: reviews });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

// create review

export const createReview = async (req, res) => {
    try {
        // ✅ Correctly assign doctorId and userId from params/authentication
        const doctorId = req.params.doctorId;
        const userId = req.userId; // Extracted from `authenticate` middleware

        if (!doctorId || !userId) {
            return res.status(400).json({ success: false, message: "Doctor ID and User ID are required" });
        }

        // ✅ Create and save new review
        const newReview = new Review({
            ...req.body,
            doctor: doctorId,
            user: userId,
        });

        const savedReview = await newReview.save();

        // ✅ Update the doctor's reviews array
        await Doctor.findByIdAndUpdate(doctorId, {
            $push: { reviews: savedReview._id },
        });

        res.status(201).json({ success: true, message: "Review submitted", data: savedReview });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};