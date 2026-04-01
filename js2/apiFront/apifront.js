

// document.getElementById('btn').addEventListener('click', () => {
//     fetch('https://brasilapi.com.br/api/ibge/municipios/v1/SP?providers=dados-abertos-br,gov,wikipedia')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data[1].nome);
//         const p = document.getElementById('p')
//         p.textContent = data[1].nome

//         const input = document.getElementById('input').value

//         const parentDiv = document.getElementById('parent')
//         const novop = document.createElement('p')
//         novop.textContent = `${data[input].nome} ---- ${data[input].codigo_ibge}`
//         parentDiv.appendChild(novop)
//     })
// })


document.getElementById('btn').addEventListener('click', async function() {
    try {
        //Requisição do JSON simplificada
        const response = await fetch('https://brasilapi.com.br/api/ibge/municipios/v1/SP?providers=dados-abertos-br,gov,wikipedia')
        const data = await response.json()

        //Exibição no HTML
        console.log(data[1].nome);
        const p = document.getElementById('p')
        p.textContent = data[1].nome
        
        const input = document.getElementById('input').value
        const parentDiv = document.getElementById('parent')
        const novop = document.createElement('p')
        novop.textContent = `${data[input].nome} ---- ${data[input].codigo_ibge}`
        parentDiv.appendChild(novop)
    }
    catch (error){
        console.log(error);
    }
})






// [3] CONSUMINDO API (FRONT)
// Arquivo: api_front.js

// Objetivo:
// Aprender a buscar dados de APIs.

// Ideia:
// Buscar uma frase ou imagem de API externa.

// Fluxo:
// botão clicado
// ↓
// fetch()
// ↓
// resposta JSON
// ↓
// mostrar na tela

// Passos:

// * criar botão
// * usar fetch()
// * usar await response.json()
// * mostrar resultado no HTML

// Conceitos:
// fetch
// async/await
// requisição HTTP