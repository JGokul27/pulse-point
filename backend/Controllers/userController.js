import UserSchema from "../models/UserSchema.js";
import Booking from '../models/BookingSchema.js';
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await UserSchema.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Update" });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id).select("-password");

    res.status(200).json({ success: true, message: "Successfully Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserSchema.findById(id).select("-password");
    res.status(200).json({ success: true, message: "User found", data: user });
  } catch (err) {
    res.status(404).json({ success: false, message: "No user Found" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await UserSchema.find({}).select("-password");
    res
      .status(200)
      .json({ success: true, message: "Users found", data: users });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await UserSchema.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user._doc;

    res
      .status(200)
      .json({
        success: true,
        message: "Profile info is getting",
        data: { ...rest },
      });
  } catch (error) {
    console.error("error fetching user:", error)
    res
      .status(500)
      .json({ success: false, message: "something went wrong, cannot get" });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId });

    const doctorIds = bookings.map((el) => el.doctor.id);

    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    return res
      .status(200)
      .json({
        success: true,
        message: "Appoitments are getting",
        data: doctors,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong , Cannot get" });
  }
};
