
const workout = require("../database/workout");

//This layer is in charge of the business logic
const getAllWorkouts = () => {
    const allworkouts = workout.getAllWorkouts();
    return allworkouts;
}

const getOneWorkOut = () => {
    return;
}

const createNewWorkout = () => {
    return;
}

const updateOneWorkout = () => {
    return;
}

const deleteOneWorkout = () => {
    return;
}

module.exports = {
    getAllWorkouts,
    getOneWorkOut,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}