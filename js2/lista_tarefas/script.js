





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