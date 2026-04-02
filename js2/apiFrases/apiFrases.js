const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const api = [
    {id: 1, frase: "Olá mundo"}
    ,{id: 2, frase: "Aprendendo JavaScript"}
    ,{id: 3, frase: "Express fazendo conexão com o frontend"}
]

app.get('/frase', (req,res) => {
    res.json(api);
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})


// [5] API DE FRASES
// Arquivo: api_frases.js

// Biblioteca:
// Express

// Objetivo:
// Criar uma API simples.

// Fluxo:
// cliente acessa /frase
// ↓
// servidor responde
// ↓
// JSON com frase

// Passos:

// * criar array de frases
// * criar rota /frase
// * retornar JSON

// Conceitos:
// API
// JSON
// resposta HTTP

// ---