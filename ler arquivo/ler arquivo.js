import fs from "fs"
import readlineSync from "readline-sync"

const arquivo = readlineSync.questionInt('Número do arquivo para ser alterado: ')
const input = readlineSync.question(`Substitua o conteúdo de mensagem${arquivo}.txt com: `)
fs.writeFileSync(`mensagem${arquivo}.txt`, input)
const conteudo = fs.readFileSync(`mensagem${arquivo}.txt`, "utf-8")
console.log("Conteúdo alterado para:")
console.log(conteudo);
 

// [5] LER ARQUIVO
// Arquivo: ler_arquivo.js
// 
// Objetivo:
// Aprender Node.js lendo arquivos.
// 
// Biblioteca:
// fs (filesystem)
// 
// Fluxo:
// arquivo texto
// ↓
// Node lê arquivo
// ↓
// conteúdo aparece no terminal
// 
// Passos:
// - criar arquivo mensagem.txt
// - usar fs.readFileSync()
// - mostrar conteúdo no console
// 
// Conceitos:
// Node.js
// filesystem
// backend básico
// 