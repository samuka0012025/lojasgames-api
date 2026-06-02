const db = require('../database/db')

const listar = (req, res) => {
    const jogos = db.prepare('SELECT * FROM jogos').all()
    res.status(200).json(jogos)
}

const buscarPorId = (req, res) => {
    const id = Number(req.params.id)

    const resultado = db.prepare(`
        SELECT * FROM jogos WHERE id = ?
    `).get(id)

    if (resultado.changes === 0) {
        return res.status(404).json({
            message: 'O jogo não existe'
        })
    }
    
    res.status(200).json(resultado) 
}

const criar = (req, res) => {
    const { titulo, plataforma, genero, preco, disponivel } = req.body

    const resultado = db.prepare(`
        INSERT INTO jogos (titulo, plataforma, genero, preco, disponivel)
        VALUES (?, ?, ?, ?, ?)
    `).run(titulo, plataforma, genero, preco, disponivel)

    const id = resultado.lastInsertRowid
    const novoJogo = db.prepare(`SELECT * FROM jogos WHERE id = ?`).get(id)

    res.status(201).json(novoJogo)
}

const atualizar = (req, res) => {
    const id = Number(req.params.id)
    const { titulo, plataforma, genero, preco, disponivel } = req.body

    const resultado = db.prepare(`
        UPDATE jogos SET titulo = ?, plataforma = ?, genero = ?, preco = ?, disponivel = ?
        WHERE id = ?
    `).run(titulo, plataforma, genero, preco, disponivel, id)

    if (resultado.changes === 0) {
        return res.status(404).json({
            message: 'Jogo não encontrado!'
        })
    }

    const jogoAtualizado = db.prepare('SELECT * FROM jogos WHERE id = ?').get(id)
    res.status(200).json(jogoAtualizado)
}

const deletar = (req, res) => {
    const id = Number(req.params.id)

    const resultado = db.prepare(`
        DELETE FROM jogos WHERE id = ?
    `).run(id)

    if (resultado.changes === 0) {
        return res.status(404).json({
            message: 'Jogo não encontrado!'
        })
    }

    res.status(204).send()
}

module.exports = { listar, buscarPorId, criar, atualizar, deletar }