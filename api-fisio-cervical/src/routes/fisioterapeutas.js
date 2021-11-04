var express = require("express");
var router = express.Router();

var fisioterapeutaController = require("../controllers/fisioterapeutaController");

router.get("/", function(req, res) {
    fisioterapeutaController.testar(req, res);
});

router.get("/listar", function(req, res) {
    fisioterapeutaController.listar(req, res);
});

router.post("/cadastrar", function(req, res) {
    fisioterapeutaController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res) {
    fisioterapeutaController.entrar(req, res);
});
  
module.exports = router;