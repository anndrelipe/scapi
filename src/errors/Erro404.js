import ErroInicial from "./ErroInicial.js";

class Erro404 extends ErroInicial {

    constructor (mensagem = "Parece que essa rota não existe!") {
        super(mensagem, 404);
    }
}

export default Erro404;