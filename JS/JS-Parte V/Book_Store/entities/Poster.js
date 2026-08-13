import { Product } from "./Product.js";
export {Poster}

class Poster extends Product{
    constructor(Title, description, height, width, price, inStock = 0){
        super(`Poster: ${Title}`, description, price, inStock)
        this.height = height
        this.width = width
    }

}