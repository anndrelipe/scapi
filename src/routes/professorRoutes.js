import { Router } from "express";
import ProfessoresController from "../controllers/ProfessoresController.js";

const professorRouter = Router();

professorRouter.get("/professores", ProfessoresController.listarProfessores);
professorRouter.post("/professores", ProfessoresController.adicionarProfessor);

export default professorRouter;