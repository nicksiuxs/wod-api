const DB = require("./db.json");

const { saveToDatabase } = require("./utils")

const getAllWorkouts = () => {
    try {
        return DB.workouts;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

const getOneWorkOut = (workoutId) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if (!workout) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            };
        }
        return workout;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyTaken = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyTaken) {
        throw {
            status: 400,
            message: `Workout with the name '${newWorkout.name}' already exists`,
        };
    }
    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    } catch (error) {
        throw { status: 500, message: error?.message || error };
    }
}

const updateWorkout = (workoutId, changes) => {
    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForUpdate === -1) {
        return;
    }
    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updateWorkout;
}

const deleteOneWorkout = (workoutId) => {
    const indexForDeletion = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForDeletion === -1) {
        return;
    }
    DB.workouts.splice(indexForDeletion, 1);
    console.log(DB)
    saveToDatabase(DB);
}

module.exports = { getAllWorkouts, getOneWorkOut, createNewWorkout, updateWorkout, deleteOneWorkout }