const Sleep = require("../Models/sleep.model");

// Create sleep entry
const createSleep = async (req, res) => {
  try {
    const { sleepTime, wakeTime, quality } = req.body;

    const sleep = await Sleep.create({
      user: req.user.id,
      sleepTime,
      wakeTime,
      quality,
    });

    res.status(201).json({ message: "Sleep entry created", sleep });
  } catch (error) {
    res.status(500).json({ message: error.message,stack: error.stack });
  }
};


const getMySleepEntries = async (req, res) => {
  try {
    const entries = await Sleep.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getSleepById = async (req, res) => {
  try {
    const sleep = await Sleep.findOne({ _id: req.params.id, user: req.user.id });

    if (!sleep) {
      return res.status(404).json({ message: "Sleep entry not found" });
    }

    res.status(200).json(sleep);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateSleep = async (req, res) => {
  try {
    const sleep = await Sleep.findOne({ _id: req.params.id, user: req.user.id });

    if (!sleep) {
      return res.status(404).json({ message: "Sleep entry not found" });
    }

    if (req.body.sleepTime !== undefined) sleep.sleepTime = req.body.sleepTime;
    if (req.body.wakeTime !== undefined) sleep.wakeTime = req.body.wakeTime;
    if (req.body.quality !== undefined) sleep.quality = req.body.quality;

    await sleep.save(); // .save() use kiya taaki pre("save") hook chale aur duration recalculate ho

    res.status(200).json({ message: "Sleep entry updated", sleep });
  } catch (error) {
    res.status(500).json({ message: error.message  });
  }
};


const deleteSleep = async (req, res) => {
  try {
    const sleep = await Sleep.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!sleep) {
      return res.status(404).json({ message: "Sleep entry not found" });
    }

    res.status(200).json({ message: "Sleep entry deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSleep,
  getMySleepEntries,
  getSleepById,
  updateSleep,
  deleteSleep,
};