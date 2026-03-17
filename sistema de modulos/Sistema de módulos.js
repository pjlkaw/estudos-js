import { soma} from "./math.js"
// const readlinesync = require("readline-sync")
import readlinesync from "readline-sync"
import chalk from "chalk"

const valor1 = parseInt(readlinesync.question(chalk.yellow("Valor 1: ")))
const valor2 = parseInt(readlinesync.question(chalk.yellow("Valor 2: ")))

console.log(chalk.bgCyan(" - " +
    soma(valor1,valor2) +
" - "));
 





// [3] SISTEMA DE MÓDULOS
// Arquivos:
// math.js
// sistema_de_modulos.js

// Objetivo:
// Aprender import e export.

// Ideia:
// Criar funções matemáticas em outro arquivo.

// Fluxo:
// math.js cria funções
// ↓
// exporta funções
// ↓
// arquivo principal importa
// ↓
// usa as funções

// Passos:
// - criar função somar()
// - exportar função
// - importar no arquivo principal
// - executar função

// Conceitos:
// import
// export
// organização de código