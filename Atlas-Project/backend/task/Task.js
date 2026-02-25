const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "pending",
    },
  },
  { timestamps: true },
);

mongoose.exports = mongoose.model("Task", taskSchema);
