//Projeto de arrays no terminal
const rs = require('readline-sync')

let usuario = [
    {nome: "Pedro", idade: 18}
    ,{nome: "Gustavo", idade: 10}
]
while (true) {
    console.log( "\n============================\n" );
    console.log("Array Atual:");
    console.table(usuario);
    console.log("\n1 - Adicionar")
    console.log("2 - Listar")
    console.log("3 - Pesquisar por nome")
    console.log("4 - Pesquisar por idade")
    console.log("5 - Sair")
    const input = rs.question('O que gostaria de fazer? ')

    if (input == 1) {
        console.log('O que gostaria de adicionar ao array? ');
        const nome = rs.question('nome ..: ')
        const idade = rs.questionInt('idade ..: ')
        const add = { nome: nome, idade: idade };
        usuario.push(add)
    }

    if (input == 2) {
        console.log('---');

        usuario.forEach((item) => { //lista de forma simples
            console.log(item);
        })
        
        const inputItem = rs.questionInt('Qual valor você gostaria de inspecionar..: ')
        if (inputItem -1 <= usuario.length) {
            console.table(usuario[inputItem]);
        }

    }

    if (input == 3) {
        console.log('Pesquisar pelo nome de usuário..: ');
        const inputNome = rs.question('..:')

        usuario.forEach((obj)=>{
            if(obj.nome == inputNome) {
                console.table(obj) // LEGAL! deixa o array em forma de tabela no próprio terminal
            }
        })
    }

    if (input == 4) {
        console.log('Pesquisar pela idade do usuário..: ');
        const inputIdade = rs.questionInt('..:')

        usuario.forEach((obj)=>{
            if(obj.idade == inputIdade) {
                console.table(obj)
            }
        })
    }

    //encerra programa
    if (input == 5) {
        return
    }
}