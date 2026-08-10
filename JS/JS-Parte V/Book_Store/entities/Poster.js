import { Product } from "./Product";
export {Poster}

class Poster extends Product{
    constructor(Title, description, height, width, price, inStock = 0){
        super(`Pôster: ${Title}`, description, price, inStock)
        this.height = height
        this.width = width
    }

}