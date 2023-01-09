
const { v4: uuid } = require("uuid");

const Workout = require("../database/workout");

//This layer is in charge of the business logic
const getAllWorkouts = () => {
    try {
        const allworkouts = Workout.getAllWorkouts();
        return allworkouts;
    } catch (error) {
        throw error;
    }
}

const getOneWorkout = (workoutId) => {
    try {
        const workout = Workout.getOneWorkOut(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch (error) {
        throw error;
    }
}

const updateOneWorkout = (workoutId, changes) => {
    try {
        const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
        return updatedWorkout;
    } catch (error) {
        throw error;
    }
}

const deleteOneWorkout = (workoutId) => {
    try {
        Workout.deleteOneWorkout(workoutId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}