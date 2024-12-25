import modalidade from "../models/modalidade.js"

class ModalidadesController {
    static async adicionarModalidade(req, res) {
        const { nome, descricao, professores, mensalidade } = req.body;

        try {
            const novaModalidade = await modalidade.create({
                nome : nome,
                descricao: descricao,
                professores: professores,
                mensalidade: mensalidade
            });

            if (novaModalidade) {
                res.status(201).json({
                    status: 201,
                    message: "Uma nova modalidade foi adicionada!",
                    content: {
                        error: [],
                        data: novaModalidade
                    }
                });
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: 500,
                message: "Um erro aconteceu",
                content: {
                    error: error.message,
                    data: []
                }
            });
        }
    }
}

export default ModalidadesController;