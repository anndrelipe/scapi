class ErroInicial {

    constructor (mensagem = "Ops... Algo inesperado aconteceu!", status = 500 ) {
        this.mensagem = mensagem;
        this.status = status;
    }

    enviar (res) {
        res.status(this.status).json({
            status: this.status,
            message: "Ops... Algo inesperado aconteceu!",
            content: {
                error: this.mensagem,
                data: []
            }
        });
    }
}

export default ErroInicial;