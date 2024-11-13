//EXERCICIO 1
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante." 
function novoNome(nome1){
    let nome = "Vinicius"
    let idade = 28
    let cidade = "São Leopoldo"
    let estudante = "estudante"
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}.`)
}
novoNome(nome1)

//---------------//
function novoNome2(nome2){
    nome = "Vinicius"
    idade = 28
    cidade = "São Leopoldo"
    let profissão = "Cozinheiro"
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`
    return frase
}
let novoNome3 = novoNome2(nome2)
console.log(novoNome3)
//--------------//
//EXERCICIO 2
function calculo(num1,num2){
let soma = num1 + num2
return soma
}
let resultado = calculo(7,12)
console.log(resultado)
//-----------//
function booleano(n1,n2){
    let bool = n1 >= n2
    return bool
}
let bool2= booleano(9,4)
console.log(bool2)
//-----------//
function calculo3(n5){
    let verifica = n5 %2
    let verifica2 = verifica ===0
    return verifica2
}
let verifica3 = calculo3(7)
console.log(verifica3)
//---------//
const frase5 = "olá mundo"
function frase2(frase5){
    const frase4 = frase5.toUpperCase()
    console.log(frase4.length)
    console.log(frase4)
}
frase2(frase5)
//EXERCICIO 3
//---------------//SOMA
let num1 = Number(prompt("Insira um número:"))
let num2 = Number(prompt("Insira um número:"))
function soma2(num1,num2){
    let resul = num1 + num2
    return resul
}
let resul2 = soma2(num1,num2)
console.log(" O resultado da soma é:", resul2)
//-------------// DIFERENÇA
function diferenca2(num1,num2){
    let resul3 = num1 - num2
    return resul3
}
let resul3 = diferenca2(num1,num2)
console.log(" O resultado da diferença é:", resul3)
//--------------//MULTIPLICAÇÃO
function multiplicar(num1,num2){
    let resul4= num1 * num2
    return resul4
}
let resul4 = multiplicar(num1,num2)
console.log(" O resultado da multiplicação é:", resul4)
//------------//DIVISÃO
function divisao(num1,num2){
    let resul5= num1 / num2
    return resul5
}
let resul5 = divisao(num1,num2)
console.log(" O resultado da divisão é:", resul5)