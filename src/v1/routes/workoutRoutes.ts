import express from "express";
import workOutController from "../../controllers/workoutController";
// import recordController from "../../controllers/recordController";

const router = express.Router();

router.get("/", workOutController.getAllWorkouts);

// router.get("/:workoutId", workOutController.getOneWorkout);

// router.get("/:workoutId/records", recordController.getRecordFromWorkout);

// router.post("/", workOutController.createNewWorkout);

// router.patch("/:workoutId", workOutController.updateOneWorkout);

// router.delete("/:workoutId", workOutController.deleteOneWorkout);

export default router;
