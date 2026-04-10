async function addTarefa() {
    console.log(1);
    
    const valorInput = document.getElementById('input').value
    if(valorInput === '' || valorInput.length < 2) return
    
    await fetch('/tarefas', {//Carrega tarefas da API do servidor
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tarefa: valorInput, feito: false })
    })
    await carregarTarefas()
}

async function carregarTarefas() {
    const res = await fetch('/tarefas') //Carrega tarefas da API do servidor
    const tarefas = await res.json() 

    //Mostra as tarefas guardadas na API
    let id = 1
    const ul = document.getElementById('lista')
    document.getElementById('lista').innerHTML = ''
    tarefas.forEach(item => {
        let check = ''
        if (item.feito === true) {
            check = '✓'
        }
        const li = document.createElement('li')

        li.innerHTML = `
            <div class="containerTarefa">
                <span>${id++}#</span>
                <span>${item.tarefa}</span>
                <span>${check}</span> 
            </div>
        `
        ul.appendChild(li)
    });
}
carregarTarefas()