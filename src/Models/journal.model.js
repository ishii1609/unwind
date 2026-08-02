const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mood: {
      type: String,
      enum: ["happy", "calm", "sad", "anxious", "angry", "neutral"],
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const journalModel = mongoose.model("Journal", journalSchema);
module.exports=journalModel