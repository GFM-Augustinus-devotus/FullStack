import { User } from "./entities/User.js";
import { Book } from "./entities/Book.js";
import { Author } from "./entities/Author.js";
import { DataBase } from "./DataBase.js";
import { Poster } from "./entities/Poster.js";
import { Order } from "./entities/Order.js";
import { Product } from "./entities/Product.js";
export {App}

class App { //O database pertencerá a classe app e não someente a suas instâncias. Todos os Apps possuem o mesmo database

//Ao instaciar um novo app ele vai vir com tofos os atributos e métodos da classe app

// Não será instanciado Product, apenas books e posters

    static #database = new DataBase

    //User

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
        return App.#database.find('users')
    }

    //Author

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors(){
        return App.#database.find('authors')
    }

    //Book

    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks(){
        return App.#database.find('books')
    }

    //Poster

    createPoster(Title, description, height, width, price, inStock){
        const poster = new Poster(Title, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity){
        App.#database.addPostersToStock(posterName, quantity)
    }   

    getPoster(){
        return App.#database.find('posters')
    }

    //Order

    createOrder(item, user){
        const order = new Order(item, user) // No For Each utiliza-se a desestruração
        App.#database.saveOrder(order)

        order.data.items.forEach(({product, quantity}) => { //Product -> Book ou Poster
            if(product instanceof Book){
                App.#database.removeBooksFromStock(product.name, quantity)
            }else if(product instanceof Poster){
                App.#database.removePosterFromStock(product.name, quantity) //Polimorfismo
            }
        });
    }

    getOrders(){
        return App.#database.find('orders')
    }

    showDataBase(){
        App.#database.showStorage()
    }


}