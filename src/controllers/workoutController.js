const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allworkouts = workoutService.getAllWorkouts();
    res.send({ status: 'OK', data: allworkouts });
}

const getOneWorkOut = (req, res) => {
    const workout = workoutService.getOneWorkOut();
    res.send("Get an existing workout new");
}

const createNewWorkout = (req, res) => {
    const createdWorkout = workoutService.createNewWorkout();
    res.send("Create a new workout new");
}

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout new");
}

const deleteOneWorkout = (req, res) => {
    const deletedWorkout = workoutService.deleteOneWorkout();
    res.send("Delete an existing workout new");
}

module.exports = {
    getAllWorkouts,
    getOneWorkOut,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}