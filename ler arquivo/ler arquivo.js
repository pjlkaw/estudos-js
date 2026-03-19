import fs from "fs" //Ler e alterar arquivos
import readlineSync from "readline-sync"
import { exec } from "child_process" //executar arquivos no programa padrão
import os from "os" //sistema operacional

console.log(`Arquivos da pasta:`)
const pasta = fs.readdirSync(".") //pega arquivos da pasta em forma de array

//tratamento da pasta para aparecer apenas arquivos .txt
const pastaFiltrada = pasta.filter(arquivo=>arquivo.endsWith(".txt")) //sem a condição do forEach ele segue o programa sem filtrar e mostrando todos arquivos da pasta
pastaFiltrada.forEach((arquivo, index) => {
    console.log(`${index} - ${arquivo}`);
});

const indice = readlineSync.questionInt('Número do arquivo para ser alterado: ')
const arquivoEscolhido = pastaFiltrada[indice] //arquivo com o índice
const input = readlineSync.question(`Substitua o conteúdo de ${arquivoEscolhido} com: `)

fs.writeFileSync(arquivoEscolhido, input)
const conteudo = fs.readFileSync(arquivoEscolhido, "utf-8")
console.log("Conteúdo alterado para:")
console.log(conteudo);

const sistema = os.platform()
console.log(sistema)
if(sistema === "linux") {
    const verArquivo = readlineSync.question('Deseja abrir o arquivo? (S/N) ')
    if (verArquivo == "S" || "s") {
        exec(`xdg-open ${arquivoEscolhido}`) //"xdg-open" exclusivo para linux
    } else {
        console.log("Fim do Programa");
    }
}
 

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