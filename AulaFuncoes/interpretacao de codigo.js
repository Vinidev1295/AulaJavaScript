//EXERCICIO 1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
/*A) O que vai ser impresso no console?
Vai imprimir a multiplicação das duas variaveis por 5, que no caso seriam 2*5 e 10*5
b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
Irá retornar o valor das multiplicações, mas não será impresso nada.*/
//-------------//
//EXERCICIO 2
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/* A) Explique o que essa função faz e qual é sua utilidade:
O usuário irá inserir um texto via prompt, o texto inserido será transformado para todo em letra maiúscula e irá inserir a palavra cenoura no texto.
B) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
  i.   Eu gosto de cenoura (Será impresso true)
  ii.  CENOURA é bom pra vista (Será impresso true)
  iii. Cenouras crescem na terra (Será impresso true)
*/