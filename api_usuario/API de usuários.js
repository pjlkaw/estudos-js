
const express = require('express')

const app = express()
app.use(express.json()) //Faz o servidor entender todo JSON

const users = [
    {
     "nome":"Pedro",
     "idade": 18
    },
    {
     "nome":"Izabelly",
     "idade": 17
    }
]

app.post('/users', (req, res) => {
    const novoUser = req.body
    users.push(novoUser)
    res.json(users)
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})


// [8] API DE USUÁRIOS
// Arquivo: api_usuarios.js

// Objetivo:
// Criar API com dados.

// Fluxo:
// requisição /users
// ↓
// servidor pega lista
// ↓
// retorna JSON

// Passos:
// - criar array de usuários
// - criar rota /users
// - retornar array em JSON

// Conceitos:
// arrays
// API
// estrutura de dados