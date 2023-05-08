const mongoose = require("mongoose");

const user = mongoose.Schema(
  {
    u_email: {
      type: String,
      required: [true, "Please add your email"],
      unique: [true, "User already exists"],
    },
    u_password: {
      type: String,
      required: [true, "Please add your password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("user", user);
