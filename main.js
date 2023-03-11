let nome = prompt('Qual é o seu nome?')
let idade = prompt('Quantos anos você tem?')
let linguagemProgramacao = prompt('Qual linguagem de programação você está estudando?')



alert('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagemProgramacao + '!')

let pergunta = prompt('Você gosta de estudar ' + linguagemProgramacao + '?' + '       ' + ' Responda 1 para SIM e 2 para NÃO')

if (pergunta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else {
    alert('Ahh que pena.. Já tentou aprender outras linguagens?')
}
