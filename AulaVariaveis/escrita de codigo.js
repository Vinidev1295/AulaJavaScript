//typeof mostra o tipo de variável, no caso mostrou ser undefined pois não há nenhuma variável declarada.
let nome 
let idade
console.log(typeof nome)
console.log(typeof idade)

//Usando o comando typeof seguido da variável nome e idade no console.log foi declarado que minha variável é uma string.
nome = prompt ("Qual seu nome?")
idade = prompt ("Qual sua idade")
console.log(nome,typeof nome)
console.log(idade,typeof idade)

//Usando o comando prompt posso imprimir os dados de nome e idade na frase desejada.
nome = prompt ("Qual seu nome?")
idade = prompt ("Qual sua idade?")
console.log("Me chamo", nome, "e tenho", idade, "anos.")

//criei um prompt para responder sim ou nao para as perguntas abaixo.
pergunta1 = prompt ("Hoje está chovendo?") 
pergunta2 = prompt ("Hoje está frio?")
pergunta3 = prompt ("Estamos no ano de 2024?")
console.log("Sua resposta é:", pergunta1)
console.log("Sua resposta é:", pergunta2)
console.log("Sua resposta é:", pergunta3)

//
let a = prompt("Qual o valor de a?")
let b = prompt("Qual o valor de b?")
c = a //o valor da variavel a passou para variavel c
a = b //o valor da variavel b passou para variavel a
b = c //o valor da varial c (que na verdade é o valor de a) passou para a variavel b

console.log("O novo valor de a é", a)   
console.log("O novo valor de b é", b)

//Resposta ao desafio
let numeroUm = Number(prompt("Digite um valor"))
let numeroDois= Number(prompt("Digite um valor"))
let resultado = numeroUm + numeroDois //variavel "numeroUm" somada a variavel "numeroDois"
let resultado2 = numeroUm * numeroDois //variavel "numeroUm" multiplicada pela variavel "numeroDois"
console.log("O valor de x é:", resultado)
console.log("O valor de y é:", resultado2)
