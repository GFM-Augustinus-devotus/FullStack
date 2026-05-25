/*Espalhar os elementos de um Objeto iteravel*/
/*Passar varios parâmetros de uma única vez , Clonar objetos iteráveis, fazer manipulações sem afetar o objetp original
E também transformar Strings em Arrays */

let str =  "Olá Mundo"
let cars = ["Audi", "Mercedez", "BMW", "Porsche"]

console.log(...str)
console.log(...cars)


/*Posso manipular a copia do array sem afetá-lo pois ambos arrays trabalham por meio de referência, apontam para a mesma memoria */
const carsCopy = [...cars]

carsCopy.pop()

console.log(cars)
console.log(carsCopy)

/*Apenas a cópia é afetada e não o array original */

const carsObj = {...cars}
const carsObjClone = {...carsObj}

carsObjClone.ano = 1900
console.log({carsObj, carsObjClone})

/*Maninpulei apenas onbjeto de cópia */