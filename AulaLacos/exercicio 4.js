let pet = Number(prompt("Quantos bichos de estimação você tem? "))
let array = []
if(pet===0){
  console.log("Que pena! Você pode adotar um pet!")
}else{
 for(let i=0; i<pet; i++){
 pet2 = prompt("Qual o nome dos seus pets? ")
      array.push(pet2)
}
  }
  for(let i=0; i<array.length; i++){
      console.log("O nome do pet é:" ,array[i])
  }
