# Estudos JS 
Projetos de estudos

===============
ORDEM DE ESTUDO
===============

1 simulador_de_download
2 conversor_json
3 sistema_de_modulos
4 buscador_de_cep
5 ler_arquivo
6 gerador_de_senha
7 api_frases
8 api_usuarios
9 nome_do_usuario

===============
PROJETOS DE PRÁTICA – JAVASCRIPT / NODE / APIs
Ordem de dificuldade
===============


[1] SIMULADOR DE DOWNLOAD
Arquivo: simulador_de_download.js

Objetivo:
Aprender Promise, async e await.

Ideia:
Simular o download de um arquivo usando setTimeout.

Fluxo:
iniciar programa
↓
simular tempo de download
↓
mostrar "arquivo baixado"

Passos:
- criar função baixarArquivo()
- retornar uma Promise
- usar setTimeout para simular tempo
- usar async/await para receber o resultado

Conceitos:
Promise
async
await
fluxo assíncrono


===============


[2] CONVERSOR JSON
Arquivo: conversor_json.js

Objetivo:
Entender como funciona JSON.

Ideia:
Converter um objeto JavaScript em JSON e depois voltar para objeto.

Fluxo:
objeto JS
↓
JSON.stringify()
↓
string JSON
↓
JSON.parse()
↓
objeto novamente

Passos:
- criar objeto usuario
- converter para JSON
- converter de volta para objeto

Conceitos:
JSON
estrutura de dados
preparação para APIs


===============

[3] SISTEMA DE MÓDULOS
Arquivos:
math.js
sistema_de_modulos.js

Objetivo:
Aprender import e export.

Ideia:
Criar funções matemáticas em outro arquivo.

Fluxo:
math.js cria funções
↓
exporta funções
↓
arquivo principal importa
↓
usa as funções

Passos:
- criar função somar()
- exportar função
- importar no arquivo principal
- executar função

Conceitos:
import
export
organização de código


===============

[4] BUSCADOR DE CEP
Arquivo: buscador_de_cep.js

API usada:
https://viacep.com.br

Objetivo:
Aprender a usar APIs com fetch.

Fluxo:
CEP
↓
requisição para API
↓
receber JSON
↓
mostrar endereço

Passos:
- criar variável com CEP
- usar fetch()
- converter resposta com response.json()
- mostrar cidade, rua e estado

Conceitos:
fetch
API
JSON
async/await


===============

[5] LER ARQUIVO
Arquivo: ler_arquivo.js

Objetivo:
Aprender Node.js lendo arquivos.

Biblioteca:
fs (filesystem)

Fluxo:
arquivo texto
↓
Node lê arquivo
↓
conteúdo aparece no terminal

Passos:
- criar arquivo mensagem.txt
- usar fs.readFileSync()
- mostrar conteúdo no console

Conceitos:
Node.js
filesystem
backend básico


===============

[6] GERADOR DE SENHA
Arquivo: gerador_de_senha.js

Objetivo:
Treinar lógica de programação.

Ideia:
Gerar uma senha aleatória.

Fluxo:
lista de caracteres
↓
escolha aleatória
↓
montar senha
↓
mostrar senha

Passos:
- criar string com caracteres possíveis
- definir tamanho da senha
- usar Math.random()
- montar senha com loop

Conceitos:
loops
lógica
aleatoriedade


===============

[7] API DE FRASES
Arquivo: api_frases.js

Biblioteca:
Express

Objetivo:
Criar uma API simples.

Fluxo:
cliente acessa /frase
↓
servidor responde
↓
JSON com frase

Passos:
- instalar express
- criar servidor
- criar rota /frase
- retornar JSON

Conceitos:
servidor
rotas
API


===============

[8] API DE USUÁRIOS
Arquivo: api_usuarios.js

Objetivo:
Criar API com dados.

Fluxo:
requisição /users
↓
servidor pega lista
↓
retorna JSON

Passos:
- criar array de usuários
- criar rota /users
- retornar array em JSON

Conceitos:
arrays
API
estrutura de dados


===============

[9] NOME DO USUÁRIO
Arquivo: nome_do_usuario.js

Objetivo:
Conectar frontend e backend.

Fluxo:
frontend faz requisição
↓
backend responde
↓
frontend mostra resultado

Passos:
- criar API com rota /user
- retornar nome
- usar fetch no frontend
- mostrar nome na página

Conceitos:
fetch
backend
frontend
comunicação entre sistemas
