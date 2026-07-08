// Constructor of objects
function Car(name, brand, year, type, price){
    this.name = name,
    this.brand = brand,
    this.year = year,
    this.type = type,
    this.price = price
    this.available = false
    this.inStock = 0
    this.addStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = () => {
        // Save the new object
    }
}

const jetta = new Car("Jetta", "VolksWagen", 2012, "Sedan", 58900.00)
jetta.addStock(8)

console.log(jetta)