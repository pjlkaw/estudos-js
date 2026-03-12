function baixarArquivo () {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Download concluído")
      }, 2000);
    });
}   
async function download() {
    console.log("Dowload Iniciado");
    let resultado = await baixarArquivo();
    console.log(resultado)
}

download()






// [1] SIMULADOR DE DOWNLOAD
// Arquivo: simulador_de_download.js

// Objetivo:
// Aprender Promise, async e await.

// Ideia:
// Simular o download de um arquivo usando setTimeout.

// Fluxo:
// iniciar programa
// ↓
// simular tempo de download
// ↓
// mostrar "arquivo baixado"

// Passos:
// - criar função baixarArquivo()
// - retornar uma Promise
// - usar setTimeout para simular tempo
// - usar async/await para receber o resultado

// Conceitos:
// Promise
// async
// await
// fluxo assíncrono

