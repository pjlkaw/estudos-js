import readlineSync from "readline-sync"

async function buscarDados() {
    
    try {
        let cep = readlineSync.question("Insira um CEP para buscar: ")
        cep = cep.replace(/\D/g, "")
        // console.log(response)
        if(cep.length !== 8){
            console.log("CEP não encontrado, tente novamente ou digite outro CEP..: \n");
            return buscarDados()
        }
        else {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            if(data.erro){
                console.log("CEP não encontrado, tente novamente ou digite outro CEP..: \n");
                return buscarDados()
            }
            console.log(
                `
                | CEP: ${data.cep}
                | Logradouro: ${data.logradouro}
                | Bairro: ${data.bairro}
                | Localidade: ${data.localidade}
                | UF: ${data.uf}
                | Estado: ${data.estado}
                `
            )            
        }

    }
    catch(error) {
        console.log(error);
    }

}
buscarDados()



// [4] BUSCADOR DE CEP
// Arquivo: buscador_de_cep.js

// API usada:
// https://viacep.com.br

// Objetivo:
// Aprender a usar APIs com fetch.

// Fluxo:
// CEP
// ↓
// requisição para API
// ↓
// receber JSON
// ↓
// mostrar endereço

// Passos:
// - criar variável com CEP
// - usar fetch()
// - converter resposta com response.json()
// - mostrar cidade, rua e estado

// Conceitos:
// fetch
// API
// JSON
// async/await
