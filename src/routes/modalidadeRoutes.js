import { Router } from "express";
import ModalidadesController from "../controllers/ModalidadesController.js";

const modalidadeRouter = Router();

modalidadeRouter.post("/modalidades", ModalidadesController.adicionarModalidade);

export default modalidadeRouter;