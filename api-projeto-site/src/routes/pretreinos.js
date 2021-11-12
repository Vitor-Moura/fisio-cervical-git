var express = require("express");
var router = express.Router();

var pretreinoController = require("../controllers/pretreinoController");

router.get("/", function(req, res) {
    pretreinoController.testar(req, res);
});

router.get("/listar", function(req, res) {
    pretreinoController.listar(req, res);
});

router.post("/cadastrar", function(req, res) {
    pretreinoController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res) {
    pretreinoController.entrar(req, res);
});
  
module.exports = router;