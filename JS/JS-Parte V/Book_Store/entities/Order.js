import { Product } from "./Product"
export {Order}

class Order {//Um item é composto por um produto(Objeto) e uma quantidade(Valor). Items é um array de objetos
    #total
    #items
    #User
    constructor(items, user){
        items.forEach(({product, quantity}) =>{ //Destruturação de itens
            if(quantity > product.inStock){
                throw new Error('Quantidade insuficiente no estoque')
            }

        }) 
    this.#items =  items
    this.#user = user
    this.#total = items.reduce((sum , {product, quantity}) => sum + (product.price * quantity) , 0) // Valor Total do pedido com todos os valores dos itens
    }

    get data(){ // Retorna o pedido em formato de objeto
        return{
            user: this.#User,
            items: this.#items,
            total: this.#total
        }
    }
}