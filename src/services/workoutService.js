
const { v4: uuid } = require("uuid");

const Workout = require("../database/workout");

//This layer is in charge of the business logic
const getAllWorkouts = () => {
    const allworkouts = Workout.getAllWorkouts();
    return allworkouts;
}

const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkOut(workoutId);
    return workout;
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
}

const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = Workout.updateWorkout(workoutId, changes);
    return updatedWorkout;
}

const deleteOneWorkout = () => {
    return;
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}