import { Vehicle ,  Car , Motocycle } from "./Vehicle.js"; 

// Não é necessário importar Vehicle pois não vai instanciar nenhum objeto da supercleasse apenas das subclasses

const myFirstCar = new Car("A6", 150000.00, 2018, "Audi", "Audi A6 - Super Turbo 6.1")
console.log(myFirstCar instanceof Car)
console.log(myFirstCar instanceof Vehicle)
console.log(myFirstCar)
console.log(myFirstCar.getAirBagInformation())

const myFirstMoto =  new Motocycle("ZX-4R", 54990.00, 2023)
console.log(myFirstMoto instanceof Car)
console.log(myFirstMoto instanceof Motocycle)
console.log(myFirstMoto)
console.log(myFirstMoto.getMotocycleClassification())
console.log(myFirstMoto)

console.log('-----------------------')
console.log(`Valor Atual ${myFirstCar.name} : R$ ${myFirstCar.getVehicleDepreciation()}`)
console.log(`Valor Atual ${myFirstMoto.name} : R$ ${myFirstMoto.getVehicleDepreciation()}`)

// Cada Super função vai pegar os dados da instância de sua subclasse em que foi gerada