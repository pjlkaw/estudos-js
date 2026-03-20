import fs from 'fs'
// import inquirer from 'inquirer';
import { type } from 'os';

const tamanhoSenha = 8
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let senha = ''
for(let i = 0; i<tamanhoSenha; i++) {
    let caracterAleatorio = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[caracterAleatorio]
}

// inquirer.prompt([
//     {
//         type: 'list',
//         message: `O que você gostaria de fazer com a senha ${senha}`,
//         choices: 'salvar no arquivo senhas.txt'
//     }
// ])

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
