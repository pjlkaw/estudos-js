import fs from 'fs'

const tamanhoSenha = 8
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let senha = []
for(let i = 0; i<=tamanhoSenha; i++) {
    let caracterAleatorio = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[caracterAleatorio]
}
console.log(senha)
fs.appendFileSync("senhas.txt", senha + "\n")


// [6] GERADOR DE SENHA
// Arquivo: gerador_de_senha.js

// Objetivo:
// Treinar lógica de programação.

// Ideia:
// Gerar uma senha aleatória.

// Fluxo:
// lista de caracteres
// ↓
// escolha aleatória
// ↓
// montar senha
// ↓
// mostrar senha

// Passos:
// - criar string com caracteres possíveis
// - definir tamanho da senha
// - usar Math.random()
// - montar senha com loop

// Conceitos:
// loops
// lógica
// aleatoriedade
