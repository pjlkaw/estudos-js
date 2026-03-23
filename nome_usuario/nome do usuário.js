const express = require('express')
const path = require('path')

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

let contador = 0
app.get('/user', (req, res) => {
    const nome = req.query.nome
    contador++
    res.json({
        mensagem: `Olá, ${nome}`
    })
    console.log(`${nome} nº${contador}`)
    
})

app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
})


// [9] NOME DO USUÁRIO
// Arquivo: nome_do_usuario.js

// Objetivo:
// Conectar frontend e backend.

// Fluxo:
// frontend faz requisição
// ↓
// backend responde
// ↓
// frontend mostra resultado

// Passos:
// - criar API com rota /user
// - retornar nome
// - usar fetch no frontend
// - mostrar nome na página

// Conceitos:
// fetch
// backend
// frontend
// comunicação entre sistemas
