"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import v1WorkoutRouter from "./v1/routes/workoutRoutes";
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
// app.use("/api/v1/workouts", v1WorkoutRouter);
app.get("/", (req, res) => {
    res.status(200).send("hola");
});
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map