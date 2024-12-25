import { Router } from "express";
import ProfessoresController from "../controllers/ProfessoresController.js";

const professorRouter = Router();

professorRouter.get("/professores", ProfessoresController.listarProfessores);
professorRouter.post("/professores", ProfessoresController.adicionarProfessor);
professorRouter.get("/professores/:id", ProfessoresController.procuraPorId);
professorRouter.put("/professores/:id", ProfessoresController.editarProfessor);
professorRouter.delete("/professores/:id", ProfessoresController.deletarProfessor);


export default professorRouter;