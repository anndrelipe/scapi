import Erro404 from "../errors/Erro404.js";

function verificaSeExiste (req, res, next) {
    next(new Erro404());
}

export default verificaSeExiste;