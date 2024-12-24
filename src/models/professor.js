import mongoose from "mongoose";
import professorSchema from "../schemas/professorSchema.js";

const professor = mongoose.model("professores", professorSchema);

export default professor;