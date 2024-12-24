/* eslint-disable no-undef */
import mongoose from "mongoose";

const professorSchema = new mongoose.Schema({
    id : { type: mongoose.Schema.ObjectId },
    nome : { 
        type: String, 
        required: [true, "O campo {VALUE} é um parâmetro obrigatório para criar um novo objeto desta coleção"]
    },
    aniversario : { type: String },
    modalidade : { 
        type: mongoose.Schema.ObjectId, 
        ref: "modalidades", 
        required: [true, "O campo {VALUE} é um parâmetro obrigatório para criar um novo objeto desta coleção"]
    },
    salario : { type: Double }

}, { versionKey: false });

export default professorSchema