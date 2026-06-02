const Database = require('better-sqlite3')
const db = Database('jogos.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS jogos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        plataforma TEXT,
        genero TEXT,
        preco REAL,
        disponivel INTEGER
    )    
`)

module.exports = db