// No caso eu estou usando polimorfismo na função getVehiclDepreciation.
// Assim tanto o Car quanto Motocycle herdam essa função mas a modifica para calcular cada um a seu fator

export {Vehicle , Car , Motocycle}

class Vehicle{
    constructor(name, price, year){
        this.name = name
        this.price = price
        this.year = year
    }

    getVehicleDepreciation(){
        return this.price - ((2026 -  this.year) * 1250 )       
    }
}

class Car extends Vehicle {
    constructor(name, price, year, brand, model){
        super(name, price, year)
        this.brand = brand
        this.model = model
    }
    getAirBagInformation(){
        if (this.year >= 2014 ){
            return `${this.name} has an Airbag`
        }else{
            return `${this.name} hasn't an Airbag`
        }
    }
    getVehicleDepreciation(carFactor){
        return this.price - ((2026 - this.year) * carFactor)
    }
}

class Motocycle extends Vehicle {
    constructor(name , price, year, type){
        super(name, price, year)
        this.type = type
    }
    getMotocycleClassification(){
        if(this.price > 50000.00){
            this.type = "SuperMoto"
        }else{
            this.type = "Moto comum"
        }
        return this.type
    }
        getVehicleDepreciation(carFactor){
        return this.price - ((2026 - this.year) * carFactor)
    }
}

export function calculateVehicleDepreciation(vehicle, factor){
    return vehicle.getVehicleDepreciation(factor)
}
