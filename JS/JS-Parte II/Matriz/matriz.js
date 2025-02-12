
let matriz = [
    ["A" , "B"],
    ["C" , "D"]
]

console.table(matriz)

//Add a new line

matriz.push(["E" , "F"])

console.table(matriz)

//Add a new column

matriz[0].push("G")

console.table(matriz)

//Show all values from the matrix

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        const value = matriz[i][j]
        console.log("Posição: [" + i + " , " + j + "]: "+ value)
    }
}