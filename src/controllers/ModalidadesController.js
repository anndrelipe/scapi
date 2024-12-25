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

    static async listarModalidades (req, res) {
        try {
            const modalidades = await modalidade.find({});

            res.status(201).json({
                status: 201,
                message: "Uma nova modalidade foi adicionada!",
                content: {
                    error: [],
                    data: modalidades
                }
            });

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

    static async procuraPorId (req, res) {
        const {id} = req.params;

        try {
            const modalidadeEncontrada = await modalidade.findById(id);

            res.status(200).json({
                status: 200,
                message: "Uma modalidade foi encontrada! " + id,
                content: {
                    error: [],
                    data: modalidadeEncontrada
                }
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "Algum erro aconteceu.",
                content: {
                    error: error.message,
                    data: []
                }
            });
        }
    }

    static async deletarModalidade (req, res) {
        const {id} = req.params;

        try {
            const modalidadeExcluida = await modalidade.findById(id);
            await modalidade.findByIdAndDelete(id);

            res.status(200).json({
                status: 200,
                message: "Uma modalidade foi excluida! " + id,
                content: {
                    error: [],
                    data: modalidadeExcluida
                }
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "Algum erro aconteceu.",
                content: {
                    error: error.message,
                    data: []
                }
            });
        }
    }

    static async editarModalidade (req, res) {
        const { nome, descricao, professores, mensalidade } = req.body;
        const {id} = req.params;

        try {
            const modalidadeEditada = {
                nome : nome,
                descricao: descricao,
                professores: professores,
                mensalidade: mensalidade
            };

            await modalidade.findByIdAndUpdate(id, modalidadeEditada);


            res.status(200).json({
                status: 200,
                message: "Uma modalidade foi editada! " + id,
                content: {
                    error: [],
                    data: modalidadeEditada
                }
            });

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "Algum erro aconteceu.",
                content: {
                    error: error.message,
                    data: []
                }
            });
        }
    }
}

export default ModalidadesController;