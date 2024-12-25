import professor from "../models/professor.js"

class ProfessoresController {
    static async adicionarProfessor (req, res) {
        const { nome, aniversario, modalidade, salario } = req.body;

        try {
            const novoProfessor = await professor.create({
                nome : nome,
                aniversario: aniversario,
                modalidade: modalidade,
                salario: salario
            });

            if (novoProfessor) {
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
            const professores = await professor.find({}).populate("modalidade").exec();

            res.status(201).json({
                status: 201,
                message: "Um novo professor foi adicionado!",
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
}

export default ProfessoresController;