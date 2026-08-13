import { Product } from "./Product.js";
export {Book}

class Book extends Product{
    constructor(title, synopsis, genre, pages, author, description, price, inStock = 0){
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.author =  author // Poderia colocar diretamente uma instância de Author
    }
}