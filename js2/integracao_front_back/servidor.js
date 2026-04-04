const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.static('.')) // arquivos estaticos

let dados = JSON.parse(fs.readFileSync('./usuarios.json', 'utf-8'));
app.get('/usuarios', (req, res) => {
    res.json(dados)
})

app.listen(3000, () => {
    console.log('3000 servidor');
    
})




// [6] FRONT + BACK (PRIMEIRA INTEGRAÇÃO)
// Arquivos:
// frontend.js
// servidor.js

// Objetivo:
// Conectar frontend com backend.

// Fluxo:
// frontend faz requisição
// ↓
// backend recebe
// ↓
// backend responde
// ↓
// frontend mostra

// Passos:

// * rodar servidor
// * criar rota /frase
// * usar fetch no frontend
// * exibir resultado

// Conceitos:
// integração
// requisição e resposta
// client-server
