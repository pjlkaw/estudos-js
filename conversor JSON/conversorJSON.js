const usuarioPlural = {
    nome: "Pedros",
    idade: "17s",
    email: "pedros@sgmails.coms"
}
const usuarioJSON = JSON.stringify(usuarioPlural)
console.log("Convertido para JSON:");
console.log(usuarioJSON);

const usuarioObjeto = JSON.parse(usuarioJSON)
console.log("Convertido para Objeto:");
console.log(usuarioObjeto);




//Pegando JSON de outro arquivo .js usando import
import usuario from "./objeto.js"
const nome = usuario.nome
const idade = usuario.idade
const email = usuario.email
const telefone = usuario.telefone
console.log("\n ===============");

console.log(nome, idade, email, telefone)








// [2] CONVERSOR JSON
// Arquivo: conversor_json.js

// Objetivo:
// Entender como funciona JSON.

// Ideia:
// Converter um objeto JavaScript em JSON e depois voltar para objeto.

// Fluxo:
// objeto JS
// ↓
// JSON.stringify()
// ↓
// string JSON
// ↓
// JSON.parse()
// ↓
// objeto novamente

// Passos:
// - criar objeto usuario
// - converter para JSON
// - converter de volta para objeto

// Conceitos:
// JSON
// estrutura de dados
// preparação para APIs