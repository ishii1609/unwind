

const mongoose = require("mongoose");

const sleepSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sleepTime: {
      type: String, // "23:00" format (24-hour)
      required: true,
    },
    wakeTime: {
      type: String, // "07:00" format
      required: true,
    },
    duration: {
      type: Number, 
    },
    quality: {
      type: String,
      enum: ["poor", "average", "good"],
      required: true,
    },
  },
  { timestamps: true }
);

sleepSchema.pre("save", function () {
  if (this.sleepTime && this.wakeTime) {
    const [sleepH, sleepM] = this.sleepTime.split(":").map(Number);
    const [wakeH, wakeM] = this.wakeTime.split(":").map(Number);

    let sleepMinutes = sleepH * 60 + sleepM;
    let wakeMinutes = wakeH * 60 + wakeM;

    // Agar wake time, sleep time se pehle hai (midnight cross ho gayi)
    if (wakeMinutes <= sleepMinutes) {
      wakeMinutes += 24 * 60; // agle din add kar do
    }

    this.duration = wakeMinutes - sleepMinutes;
  }

});

module.exports = mongoose.model("Sleep", sleepSchema);