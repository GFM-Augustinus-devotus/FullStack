/*Using Statics for my babel example*/

/*------------------------Média Aritmética---------------------------*/
const media = (...values) => { 
    return ((values.reduce((acum , num) => num + acum , 0))/values.length).toFixed(3)
    
}
console.log(`Média = ${media(1,Math.sqrt(2),3,4,5,6,7,8,9,99, 71, -5)}`)

/*------------------------Média Ponderada-----------------------------*/
const mediaPonderada = (...ValueObj) => { 
    let sum = 0
    let sumPeso = 0
    ValueObj.forEach((value) => {
        sum += (value.valor * (value.peso ?? 1)) /*Caso o valor considerado não tiver peso atribui o peso 1 a ele*/ 
        sumPeso += value.peso ?? 1
    })
    return (sum/sumPeso).toFixed(3)
}

let obj1 = {valor: 8, peso: 5}
let obj2 = {valor: 10, peso: 3}
let obj3 = {valor: 9, peso: 2}
let obj4 = {valor: 7}

console.log(`Média Ponderada = ${mediaPonderada(obj1,obj2,obj3, obj4)}`)

/*------------------------Mediana---------------------------*/
const mediana = (...values) => { 
    const orderedValues = [...values].sort((a,b) => a -b) /*Ordenar o array de forma Crescente */
    if((orderedValues.length % 2) === 0){
        return ((orderedValues[(orderedValues.length)/2] + orderedValues[((orderedValues.length)/2) - 1]) / 2)
    }else{
        return orderedValues[Math.floor(orderedValues.length/2)]
    }
}
console.log(`Mediana = ${mediana(2,3,6,5,4,1,5,9,5)}`)

/*------------------------Moda---------------------------*/
const moda = (...values) =>{

    let qtd = values.map(num => [
        num,
        values.filter(n => n === num).length
        
    ])

    qtd.sort((a,b) => b[1] - a[1]) 
    return qtd[0][0]
}

console.log(`Moda = ${moda(1,1,5,4,9,7,4,3,5,2,4,0,4)}`)
