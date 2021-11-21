var express = require("express");
var router = express.Router();

var pretreinoController = require("../controllers/pretreinoController");

router.get("/", function(req, res) {
    pretreinoController.testar(req, res);
});

router.get("/listar", function(req, res) {
    pretreinoController.listar(req, res);
});

router.get("/listar/:idUsuario", function(req, res) {
    pretreinoController.listarPorUsuario(req, res);
});

router.post("/cadastrar/:idUsuario", function(req, res) {
    pretreinoController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res) {
    pretreinoController.entrar(req, res);
});
  
module.exports = router;