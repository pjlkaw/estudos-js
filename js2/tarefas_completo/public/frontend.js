async function carregarTarefas() {
    const res = await fetch('/tarefas')
    const tarefas = await res.json()

    const lista = document.getElementById('lista')
    lista.innerHTML = ''

    tarefas.forEach(item => {
        const li = document.createElement('li')

        let check = ''
        if (item.feito === true) {
            check = '- ✓'
        }

        li.textContent = `${item.id}# - ${item.tarefa} ${check}`
        lista.appendChild(li)
    });

}

carregarTarefas()