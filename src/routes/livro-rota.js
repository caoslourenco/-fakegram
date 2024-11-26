const express = require("express");
const livroController = require("../controllers/livro-controller");

const router = express.Router(); // Corrigido para Router()

// Definindo a rota GET
router.get("/", livroController.getLivros);

// Definindo a rota POST
router.post("/", livroController.criarLivros);

module.exports = router;
