const journalModel = require("../Models/journal.model");


const createJournal = async (req, res) => {
  try {
    const { mood, title, body } = req.body;

    const journal = await journalModel.create({
      user: req.user.id, 
      mood,
      title,
      body,
    })

    res.status(201).json({ message: "Journal entry created", journal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getMyJournals = async (req, res) => {
  try {
    const journals = await journalModel.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(journals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//singleEntry
const getJournalById = async (req, res) => {
  try {
    const journal = await journalModel.findOne({ _id: req.params.id, user: req.user.id });

    if (!journal) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json(journal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update 
const updateJournal = async (req, res) => {
  try {
    const { mood, title, body } = req.body;

    const journal = await journalModel.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { mood, title, body },
      { new: true }
    );

    if (!journal) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json({ message: "Journal entry updated", journal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete 
const deleteJournal = async (req, res) => {
  try {
    const journal = await journalModel.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!journal) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json({ message: "Journal entry deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createJournal,
  getMyJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
};