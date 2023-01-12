import express, { Application } from "express";

import bodyParser from "body-parser";
import v1WorkoutRouter from "./v1/routes/workoutRoutes";

const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
