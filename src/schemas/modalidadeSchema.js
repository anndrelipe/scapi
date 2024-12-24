/* eslint-disable no-undef */
import mongoose from "mongoose";
import professorSchema from "./professorSchema.js";

const modalidadeSchema = new mongoose.Schema({
    id : { type: mongoose.Schema.ObjectId },
    nome : { 
        type: String, 
        required : [true, "O campo {VALUE} é um parâmetro obrigatório para criar um novo objeto desta coleção"]
    },
    descricao : { type: String },
    professores : { type: [professorSchema] },
    mensalidade : { 
        type: Double,
        required: [true, "O campo {VALUE} é um parâmetro obrigatório para criar um novo objeto desta coleção"]
    }    
}, { versionKey: false });

export default modalidadeSchema;