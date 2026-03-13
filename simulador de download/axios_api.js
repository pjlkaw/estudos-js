const axios = require("axios")

async function buscarDados() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
}
async function mostrarDados() {
    const dados = await buscarDados()
    console.log(dados)
}
mostrarDados()

