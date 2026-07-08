class Product{
    constructor(name,description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity){
        this.inStock += quantity
    }
    calculateDiscount(discount){
        return this.price * (1 - (discount/100))
    }
}

const laptop = new Product("ACER 320", "Intel 9 - Modern Laptop", 5200.00)

console.log(laptop)

laptop.addToStock(7)

console.log(laptop)
console.log(laptop.calculateDiscount(15))

// Depois de calcular o valor com o disconto eu não altero o valor do produto, pois ele é o valor base da instância.
// Os valores com desconto mudam de caso para caso.