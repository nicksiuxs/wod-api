const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allworkouts = workoutService.getAllWorkouts();
    res.status(200).send({ status: 'OK', data: allworkouts });
}

const getOneWorkOut = (req, res) => {
    const workout = workoutService.getOneWorkOut();
    res.send("Get an existing workout new");
}

const createNewWorkout = (req, res) => {
    const { body } = req;

    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: 'OK', data: createdWorkout });
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