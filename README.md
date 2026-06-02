# 🎮 Loja Games API

API REST desenvolvida com Node.js e Express para gerenciamento de jogos.

## 🚀 Tecnologias

- Node.js
- Express

## 📋 Pré-requisitos

- Node.js instalado
- npm instalado

## ⚙️ Como rodar o projeto

Clone o repositório:
\```
git clone <https://github.com/SEU_USUARIO/lojagames-api.git>
\```

Instale as dependências:
\```
npm install
\```

Inicie o servidor:
\```
node server.js
\```

O servidor vai rodar em `http://localhost:3000`

## 🔗 Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | /jogos | Lista todos os jogos |
| POST | /jogos | Cadastra um novo jogo |
| PUT | /jogos/:id | Atualiza um jogo pelo id |
| DELETE | /jogos/:id | Remove um jogo pelo id |

## 📦 Exemplo de body

\```json
{
    "titulo": "God of War",
    "plataforma": "PS5",
    "genero": "Aventura",
    "preco": 299.90,
    "disponivel": true
}
\```
