import mongoose from "mongoose";
import modalidadeSchema from "../schemas/modalidadeSchema.js";

const modalidade = mongoose.model("modalidades", modalidadeSchema);

export default modalidade;