const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/municipios/:uf', async (req, res) => {
    const uf = req.params.uf.toUpperCase();
    try {
        const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}?providers=dados-abertos-br,gov,wikipedia`)
        const data = await response.json()

        res.json(data); 
    }
    catch(error) {
        console.log(error);
    }
})

app.listen(3000, () => {
    console.log("Rodando na porta 3000");
})


// [4] CRIANDO SERVIDOR
// Arquivo: servidor.js

// Biblioteca:
// Express

// Objetivo:
// Criar seu primeiro backend.

// Fluxo:
// servidor inicia
// ↓
// acesso no navegador
// ↓
// resposta aparece

// Passos:

// * instalar express
// * criar app
// * criar rota "/"
// * retornar mensagem
// * rodar com node

// Conceitos:
// Node.js
// Express
// servidor
// rotas
