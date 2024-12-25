import { Router } from "express";
import ModalidadesController from "../controllers/ModalidadesController.js";

const modalidadeRouter = Router();

modalidadeRouter.get("/modalidades", ModalidadesController.listarModalidades);
modalidadeRouter.post("/modalidades", ModalidadesController.adicionarModalidade);
modalidadeRouter.get("/modalidades/:id", ModalidadesController.procuraPorId);
modalidadeRouter.put("/modalidades/:id", ModalidadesController.editarModalidade);
modalidadeRouter.delete("/modalidades/:id", ModalidadesController.deletarModalidade);

export default modalidadeRouter;