const express = require('express')
const controller = require('../controllers/jogos')
const router = express.Router();

// 1ª Rota —→ GET
router.get('/', controller.listar)

// 2ª Rota —→ POST
router.post('/', controller.criar)

// 3ª Rota —→ PUT
router.put('/:id', controller.atualizar)

// 4ª Rota —→ DELETE
router.delete('/:id', controller.deletar)

module.exports = router
