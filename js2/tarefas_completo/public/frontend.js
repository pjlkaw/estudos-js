async function carregarTarefas() {
    const res = await fetch('/tarefas')
    const tarefas = await res.json()

    const lista = document.getElementById('lista')
    lista.innerHTML = ''

    tarefas.forEach(item => {
        const div = document.createElement('div')

        let check = ''
        if (item.feito === true) {
            check = '- ✓'
        }

        div.innerHTML = `${item.id}# - ${item.tarefa} ${check}`
        lista.appendChild(div)
    });
}
carregarTarefas()