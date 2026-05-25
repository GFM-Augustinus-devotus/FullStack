/*Desustruturação de Objetos e Arrays */
/*Criar variáveis a partir de propriedades de Objetos ou elementos de um array*/
/*O nome da variável terá o mesmo nome da propriedade do Objeto. No caso do elemento de uma array pode ter qualquer nome*/ 
/*Pode Ser utilizado como parâmetro de variáveis*/

const car = {
    nome: "A6",
    marca: "Audi",
    ano: 2021,
    proprietario: ["Gabriel", 25, "gabriel@gmail.com"]
}
 
/*Forma Tradicional*/

const nome = car.nome

/*Desestruturando o Objeto car */

const {marca , ano, proprietario} =  car

/*Desetruturar o Array. A ordem das variáveis segue a ordem do array*/

const [nomeProp, idadeProp, emailProp] = proprietario

console.log(`Informações do carro: 
NOME: ${nome}
MARCA: ${marca}
ANO: ${ano}

Informações do Propreietário:
NOME: ${nomeProp}
IDADE: ${idadeProp}
EMAIL: ${emailProp}`
)

/*Agora nas propriedades de uma Função */

function createNewCar({nome, marca, ano, proprietario}){

    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        nome,
        marca,
        ano, 
        proprietario
    }
}
/* Criação de Objetos a partir de uma função que foi usada a desetruturação de objetos */
const primeiroCarro = createNewCar(car)
console.log(primeiroCarro)

function createNewOwner([nomeProp, idadeProp, emailProp]) {
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        nomeProp,
        idadeProp,
        emailProp
    }
}

const primeiroProprietario = createNewOwner(proprietario)
console.log(primeiroProprietario)