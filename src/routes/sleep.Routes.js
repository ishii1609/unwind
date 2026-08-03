const express = require("express");
const router = express.Router();
const {authCheck } = require('../middleware/auth.middleware');
const sleepController= require("../controller/sleep.controller");

router.post("/", authCheck, sleepController.createSleep);
router.get("/", authCheck, sleepController.getMySleepEntries);
router.get("/:id", authCheck, sleepController.getSleepById);
router.put("/:id", authCheck, sleepController.updateSleep);
router.delete("/:id", authCheck, sleepController.deleteSleep);

module.exports = router;