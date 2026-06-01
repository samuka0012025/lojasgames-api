const express = require('express')
const router = require('./routes/jogos')
const app = express()
const port = 3000

app.use(express.json())
app.use('/jogos', router)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})