const express = require('express')
const controller = require('../controllers/jogos')
const router = express.Router();

// 1ª Rota —→ GET
router.get('/', controller.listar)

// 2ª Rota —→ GET
router.get('/:id', controller.buscarPorId)

// 3ª Rota —→ POST
router.post('/', controller.criar)

// 4ª Rota —→ PUT
router.put('/:id', controller.atualizar)

// 5ª Rota —→ DELETE
router.delete('/:id', controller.deletar)

module.exports = router
