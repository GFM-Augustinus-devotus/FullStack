//Array bidimensional eé um array com duas dimensões

const arr = [[ // array de array
    "1° nivel",
    "2° nivel",
    "3° nivel"
],
[   "1° nivel",
    "2° nivel",
    "3° nivel"
]]

console.log(arr)
console.log(arr[1][0])
console.log(arr[0][2])

// para acessar elementos dentro do array deve encadear colchetes

console.table(arr)

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j])
    }
}
//Iterei por todos os elementos da Matriz

