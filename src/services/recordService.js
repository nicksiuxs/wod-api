const Record = require("../database/Record");

const getRecordFromWorkout = (workoutId) => {
    try {
        const record = Record.getRecordFromWorkout(workoutId);
        return record;
    } catch (error) {
        throw error;
    }
}

module.exports = { getRecordFromWorkout }