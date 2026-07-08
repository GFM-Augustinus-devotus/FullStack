//Exisatem duas formas de criar associação entre as classes. 
// 1. Forma mais fixa com construção de uma classe dentro da outra (mais estável)

const Person1 =  require('./Person1')

const Gabriel =  new Person1("Gabriel",  "Rua hgfd", 78, "Vila Belmiro", "Santos", "São Paulo")

console.log(Gabriel)
console.log(Gabriel.address.fullAddress())

// 2. Forma mais flexível com a construção externa a outra mas associada a ela (menos estável)

const Person2 =  require('./Person2')
const Address =  require('./Address')

const addr = new Address("Rua lkjh", 15, "Vila São Luís", "Montes Claros", "Goiás")
const Ana = new Person2("Ana Paula", addr)

console.log(Ana)
console.log(Ana.address.fullAddress())