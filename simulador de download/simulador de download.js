let loading = 0
const tempoDownload = 1
function baixarArquivo () {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(
                console.log("=================="),
                console.log("Download concluído")
            )
      }, tempoDownload*1000);
    });
}   
async function download() {
    let barra = setInterval(() => {
        if (loading < 100) {
            loading++
            console.log(`---------- ${loading}% ----------`)
        }
    }, tempoDownload*10)
    let resultado = await baixarArquivo();
    console.log(resultado);
    
    clearInterval(barra)
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

