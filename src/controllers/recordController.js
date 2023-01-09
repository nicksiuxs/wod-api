const recordService = require("../services/recordService");

const getRecordFromWorkout = (req, res) => {
    const { params: { workoutId } } = req;
    if (!workoutId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':workoutId' can not be empty" },
            });
    }
    try {
        const records = recordService.getRecordFromWorkout(workoutId);
        res.status(200).send({ status: 'OK', data: records });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = { getRecordFromWorkout };