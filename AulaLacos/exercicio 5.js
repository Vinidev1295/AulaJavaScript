//Exercicio A)
const arrayOriginal = [1,2,3,4,5,6,7,8,9]
function array1(arrayOriginal){
    for(let i=0; i<arrayOriginal.length; i++){
        let receb = arrayOriginal[i]
        console.log(receb)
}
}
array1(arrayOriginal)

//Exercicio B)
function array2(arrayOriginal){
    for(let i=0; i<arrayOriginal.length; i++){
        let receb2 = arrayOriginal[i]/10
        console.log(receb2)
}
}
array2(arrayOriginal)

//Exercicio C)
let arrayNovo = []
function array3(arrayOriginal){
    for(let i=0; i<arrayOriginal.length; i++){
        if(arrayOriginal[i]%2===0){
            arrayNovo.push(arrayOriginal[i])
}
}
console.log(arrayNovo)
}
array3(arrayOriginal)
//Exercicio D)
let arrayNovo2 = ["Arroz", "Feijao", "Batata", "Ervilha"]
function array4(arrayNovo2){
    for(let i=0; i<arrayNovo2.length; i++){
        let receb = arrayNovo2[i]
    console.log( "O elemento do index", i , "é numero", arrayNovo2[i])
    }
}
array4(arrayNovo2)
//Exercicio E)
arrayNumero = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = 0
let valorMinimo = 150
function array5(arrayNumero){
    for(let i=0; i<arrayNumero.length; i++){
        let novo = arrayNumero[i]
        if(novo>valorMaximo){
            valorMaximo = novo
        }
        if(novo<valorMinimo){
            valorMinimo = novo
        }
        }
    console.log( "O maior valor é", valorMaximo , "o menor valor é", valorMinimo)
}
array5(arrayNumero)
