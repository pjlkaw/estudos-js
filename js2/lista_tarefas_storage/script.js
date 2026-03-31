let id = 1

//Carregando tarefeas, se não houver tarefasDados - []
const tarefasDados = JSON.parse(localStorage.getItem('tarefas') || '[]')

function carregarDados() {
    tarefasDados.forEach((item) => {
    id = item.id
    const conteudotarefa = document.createElement('div')
    const table = document.getElementById('table')    
    conteudotarefa.innerHTML = `
        <div id="tarefa">
            <p>${item.id}</p>
            <p>${item.tarefa}</p>
            <button class="deleteBtn">Delete</button>
        </div>
    ` 
    table.appendChild(conteudotarefa)
    });
    

}
carregarDados()

document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const table = document.getElementById('table')    
    const conteudotarefa = document.createElement('div')
    conteudotarefa.innerHTML = `
        <div id="tarefa">
            <p>${id++}</p>
            <p>${input}</p>
            <button class="deleteBtn">Delete</button>
        </div>
    ` 
    table.appendChild(conteudotarefa)
    
    //Objeto do array
    tarefasDados.push({id: id, tarefa: input})
    // Envia os dados para o localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefasDados))

    console.log(tarefasDados);
})
const tarefasExport = tarefasDados




// [2] LISTA DE TAREFAS COM LOCALSTORAGE
// Arquivo: script.js

// Objetivo:
// Salvar dados no navegador.

// Ideia:
// As tarefas continuam mesmo após recarregar a página.

// Fluxo:
// usuário adiciona tarefa
// ↓
// salva no localStorage
// ↓
// recarrega página
// ↓
// tarefas continuam lá

// Passos:

// * usar localStorage.setItem()
// * usar JSON.stringify()
// * recuperar com JSON.parse()
// * renderizar tarefas ao iniciar

// Conceitos:
// localStorage
// persistência de dados
// JSON
