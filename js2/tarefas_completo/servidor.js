const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

//Configs Express
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Definindo rota POST
app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body
    const dados = fs.readFileSync('./tarefas.json', 'utf-8')
    const tarefas = JSON.parse(dados)
    tarefas.push(novaTarefa) 
    
    fs.writeFileSync('./tarefas.json', JSON.stringify(tarefas, null, 2))

    res.json({ ok: true, tarefa: novaTarefa })

    // req.body contém os dados enviados no corpo da requisição
    console.log(req.body);

    res.send(`Dados recebidos: ${JSON.stringify(req.body)}`);
})

// Definindo rota API
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