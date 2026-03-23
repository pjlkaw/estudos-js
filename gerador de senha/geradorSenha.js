import fs from 'fs'
import readlineSync from 'readline-sync'

console.log("=========================");
console.log("=== GERADOR DE SENHAS ===");
console.log("=========================");


const tamanhoSenha = readlineSync.questionInt('Digite o tamanho da senha: ')
if (tamanhoSenha > 100) {
    console.log("Senha grande de mais para executar")
}
else {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
    let senha = ''
    for(let i = 0; i<tamanhoSenha; i++) {
        let caracterAleatorio = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[caracterAleatorio]
    }
    console.log("Senha gerada!\n" + senha)
    const salvarSenhaInput = readlineSync.question(`\nDeseja salvar a senha ' ${senha} '? (S/N)`)
    if(salvarSenhaInput == "S" || salvarSenhaInput == "s") {
        fs.appendFileSync("senhas.txt", senha + "\n")
        console.log("Senha salva no arquivo senhas.txt")
    }
    else {
        console.log("Fim do Programa!");  
    }
}


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
