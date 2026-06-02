const express = require('express')
const router = express.Router();

const jogos = []

// 1ª Rota —→ GET
router.get('/', (req, res) => {
    res.status(200).json(jogos)
})

// 2ª Rota —→ POST
router.post('/', (req, res) => {
    const id = jogos.length + 1

    const { titulo, plataforma, genero, preco, disponivel } = req.body

    const novoJogo = {
        id: id,
        titulo: titulo,
        plataforma: plataforma,
        genero: genero,
        preco: preco,
        disponivel: disponivel
    }

    jogos.push(novoJogo)
    res.status(201).json(novoJogo)
})

// 3ª Rota —→ PUT
router.put('/:id', (req, res) => {
    const id = req.params.id
    const { titulo, plataforma, genero, preco, disponivel } = req.body

    const indice = jogos.findIndex(jogo => jogo.id === Number(id))

    if (indice === -1) {
        return res.status(404)
    }

    jogos[indice] = {
        id: Number(id),
        titulo,
        plataforma,
        genero,
        preco,
        disponivel        
    }

    res.status(200).json(jogos[indice])
})

// 4ª Rota —→ DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id
    
    const indice = jogos.findIndex(jogo => jogo.id === Number(id))

    if (indice === -1) {
        return res.status(404)
    }

    jogos.splice(indice, 1)
    res.status(204).send()
})

module.exports = router
