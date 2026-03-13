let loading = 0
const tempoDownload = 100
function baixarArquivo () {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Download concluído")
      }, tempoDownload*1000);
    });
}   
async function download() {
    let barra = setInterval(() => {
        if (loading < 100) {
            loading++
            console.log(`---------- ${loading}% ----------`)
        }
    }, tempoDownload*5)
    let resultado = await baixarArquivo();
    clearInterval(barra)
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

