import professor from "../models/professor.js"
import modalidade from "../models/modalidade.js"

class ProfessoresController {
    static async adicionarProfessor (req, res) {
        const { nome, aniversario, modalidadeId, salario } = req.body;

        try {
            const novoProfessor = await professor.create({
                nome : nome,
                aniversario: aniversario,
                modalidade: modalidadeId,
                salario: salario
            });

            if (novoProfessor) {

                const modalidadeEncontrada = await modalidade.findById(modalidadeId);
                const professoresArr =  [...modalidadeEncontrada.professores, novoProfessor]

                await modalidade.findByIdAndUpdate(modalidadeId, {professores : professoresArr});

                res.status(201).json({
                    status: 201,
                    message: "Um novo professor foi adicionado!",
                    content: {
                        error: [],
                        data: novoProfessor
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

    static async listarProfessores (req, res) {
        try {
            const professores = await professor.find({})

            res.status(201).json({
                status: 201,
                message: "Professores cadastrados",
                content: {
                    error: [],
                    data: professores
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
            const professorEncontrado = await professor.findById(id).populate("modalidade").exec();;

            res.status(200).json({
                status: 200,
                message: "Um professor foi encontrado! " + id,
                content: {
                    error: [],
                    data: professorEncontrado
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

    static async deletarProfessor (req, res) {
        const {id} = req.params;

        try {
            const professorExcluido = await professor.findById(id);
            await professor.findByIdAndDelete(id);

            res.status(200).json({
                status: 200,
                message: "Um professor foi excluido! " + id,
                content: {
                    error: [],
                    data: professorExcluido
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

    static async editarProfessor (req, res) {
        const { nome, aniversario, modalidade, salario } = req.body;
        const {id} = req.params;

        try {
            const professorEditado = {
                nome : nome,
                aniversario: aniversario,
                modalidade: modalidade,
                salario: salario
            };

            await professor.findByIdAndUpdate(id, professorEditado);


            res.status(200).json({
                status: 200,
                message: "Um professor foi editado! " + id,
                content: {
                    error: [],
                    data: professorEditado
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

export default ProfessoresController;