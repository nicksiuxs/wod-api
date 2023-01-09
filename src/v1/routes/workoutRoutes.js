const express = require("express");
const workOutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();

router.get("/", workOutController.getAllWorkouts);

router.get("/:workoutId", workOutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordFromWorkout);

router.post("/", workOutController.createNewWorkout);

router.patch("/:workoutId", workOutController.updateOneWorkout);

router.delete("/:workoutId", workOutController.deleteOneWorkout);

module.exports = router;