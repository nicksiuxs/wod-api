const express = require("express");
const workOutController = require("../../controllers/workoutController")

const router = express.Router();

router.get("/", workOutController.getAllWorkouts);

router.get("/:workoutId", workOutController.getOneWorkOut);

router.post("/", workOutController.createNewWorkout);

router.patch("/:workoutId", workOutController.updateOneWorkout);

router.delete("/:workoutId", workOutController.deleteOneWorkout);

module.exports = router;