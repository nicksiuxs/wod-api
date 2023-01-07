const getAllWorkouts = (req, res) => {
    res.send("Get all workouts new");
}

const getOneWorkOut = (req, res) => {
    res.send("Get an existing workout new");
}

const createNewWorkout = (req, res) => {
    res.send("Create a new workout new");
}

const updateOneWorkout = (req, res) => {
    res.send("Update an existing workout new");
}

const deleteOneWorkout = (req, res) => {
    res.send("Delete an existing workout new");
}

module.exports = {
    getAllWorkouts,
    getOneWorkOut,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}