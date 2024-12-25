/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import ErroDeCast from "../errors/ErroDeCast.js";
import ErroDeValidacao from "../errors/ErroDeValidacao.js";
import Erro404 from "../errors/Erro404.js";
import ErroInicial from "../errors/ErroInicial.js";

function verificaErro (error, req, res, next) {
    if ( error instanceof mongoose.Error.CastError ) {
       return new ErroDeCast("Parece que o id enviado não pode ser convertido! Verifique se realmente é um hexadecimal de 20 caractéres.").enviar(res);
    }

    else if ( error instanceof mongoose.Error.ValidationError ) {
        return new ErroDeValidacao(error.message).enviar(res);
    }

    else if ( error instanceof Erro404) {
        error.enviar(res)
    }

    return new ErroInicial().enviar(res);
}

export default verificaErro;