import ErroInicial from "./ErroInicial.js";

class ErroDeCast extends ErroInicial {

    constructor (mensagem) {
        super(mensagem, 400);
    }
}

export default ErroDeCast;