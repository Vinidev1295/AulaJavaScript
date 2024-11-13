const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
/*a) O que vai ser impresso no console?
Será impresso 19,21,23,25,27,30
b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
Sim, seria. Para acessar índice de cada elemento da lista você precisar espeficiar qual elemento deseja acessar no console.log;
Exemplo: console.log(numero[1]).
