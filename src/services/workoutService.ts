const { v4: uuid } = require("uuid");

import Workout from "../database/workout";

//This layer is in charge of the business logic
const getAllWorkouts = (filterParams: any) => {
  try {
    const allworkouts = Workout.getAllWorkouts(filterParams);
    return allworkouts;
  } catch (error) {
    throw error;
  }
};

// const getOneWorkout = (workoutId) => {
//     try {
//         const workout = Workout.getOneWorkOut(workoutId);
//         return workout;
//     } catch (error) {
//         throw error;
//     }
// }

// const createNewWorkout = (newWorkout) => {
//     const workoutToInsert = {
//         ...newWorkout,
//         id: uuid(),
//         createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//         updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//     };
//     try {
//         const createdWorkout = Workout.createNewWorkout(workoutToInsert);
//         return createdWorkout;
//     } catch (error) {
//         throw error;
//     }
// }

// const updateOneWorkout = (workoutId, changes) => {
//     try {
//         const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
//         return updatedWorkout;
//     } catch (error) {
//         throw error;
//     }
// }

// const deleteOneWorkout = (workoutId) => {
//     try {
//         Workout.deleteOneWorkout(workoutId);
//     } catch (error) {
//         throw error;
//     }
// }

export default {
  getAllWorkouts,
  // getOneWorkout,
  // createNewWorkout,
  // updateOneWorkout,
  // deleteOneWorkout
};
