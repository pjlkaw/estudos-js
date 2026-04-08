const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

//Configs Express
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/tarefas', (req, res) => {
    const tarefasAPI = fs.readFileSync('./tarefas.json', 'utf-8')
    const tarefas = JSON.parse(tarefasAPI)
    
    res.json(tarefas)
})

app.listen(3000, () => {
    console.log("Servidor rodando - 3000");
})






// [8] LISTA DE TAREFAS COMPLETA (FULL)
// Arquivos:
// frontend.js
// servidor.js

// Objetivo:
// Projeto completo simples.

// Fluxo:
// frontend envia tarefa
// â†“
// backend salva
// â†“
// backend retorna lista
// â†“
// frontend atualiza tela

// Passos:

// * integrar tudo
// * remover uso de localStorage
// * usar apenas backend
// * atualizar lista dinamicamente

// Conceitos:
// fullstack bÃ¡sico
// estado
// integraÃ§Ã£o completa