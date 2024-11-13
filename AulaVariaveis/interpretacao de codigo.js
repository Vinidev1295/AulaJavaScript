let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) 
// Será impresso a = 10 b= 5

a = 10
b = 20

c = a
b = c
a = b

console.log(a, b, c)
// c = 10 b = 10 a = 10

let cargaHoraria = prompt("Quantas horas você trabalha por dia?") //substitui p por cargaHoraria autoexplicativo
let ganhoDiario = prompt("Quanto você recebe por dia?") // substitui t por ganhoDiario por ser autoexplicativo
alert(`Voce recebe ${cargaHoraria/ganhoDiario} por hora`) //E alterei no resultado para nao haver erros.