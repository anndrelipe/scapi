import ErroInicial from "./ErroInicial.js";

class ErroDeValidacao extends ErroInicial {

    constructor (mensagem) {
        super(mensagem, 400);
    }
}

export default ErroDeValidacao;