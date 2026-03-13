
async function tratamentoDados() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts') 
    const data = await response
    return data;
}

async function usandoDados() {
    const dados = await tratamentoDados();
    console.log(dados)
}

usandoDados()