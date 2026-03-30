let id = 1
document.getElementById('addBtn').addEventListener('click', () => {

    const input = document.getElementById('input').value; console.log(input);
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
    
    conteudotarefa.querySelector('.deleteBtn').addEventListener('click', () => {
        conteudotarefa.remove()
    })
})





// Reforço simples no conceito de parâmetros em funções 
// baseado na duvida que tive sobre se daria para simplificar
// document.getElementeByID() em algo menor
function conceitoParametros() { 
    let id = 'tarefa'
    function pegarID(elementId) {
        let doc = document.getElementById(elementId)
        return doc
    }
    console.log(pegarID(id))
} 