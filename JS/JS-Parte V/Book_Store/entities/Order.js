import { Product } from "./Product.js"
export {Order}

class Order {//Um item é composto por um produto(Objeto) e uma quantidade(Valor). Items é um array de objetos
    #id
    #total
    #items
    #User
    constructor(items, user){
        items.forEach(({product, quantity}) =>{ //Destruturação de itens
            if(quantity > product.inStock){
                throw new Error('Quantidade insuficiente no estoque')
            }

        }) 
        this.#id = Math.floor(Math.random() * 900000) + 100000
        this.#items =  items
        this.#User = user
        this.#total = items.reduce((sum , {product, quantity}) => sum + (product.price * quantity) , 0) // Valor Total do pedido com todos os valores dos itens
    }

    get data(){ // Retorna o pedido em formato de objeto
        return{
            id: this.#id,
            user: this.#User,
            items: this.#items,
            total: this.#total
        }
    }
}