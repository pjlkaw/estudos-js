const express = require('express')
const path = require('path')

const app = express() // cria o servidor

app.listen(3000, () => {console.log("Servidor rodando na porta 3000");}) //ativa servidor

app.get("/rota", (req, res) => {
    res.sendFile(path.join(__dirname,"html", "index.html"))
})

app.get("/frase", (req, res) => {
    res.json({
        frase: "Olá mundo"
    })
})


// [7] API DE FRASES
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
// - instalar express
// - criar servidor
// - criar rota /frase
// - retornar JSON

// Conceitos:
// servidor
// rotas
// API
