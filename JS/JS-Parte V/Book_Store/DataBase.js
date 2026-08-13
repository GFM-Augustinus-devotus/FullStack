import { Author } from "./entities/Author.js"

export {DataBase}

//Storage é um objeto contendo vários arrays de vários objetos (Entidades do sistema) que irão persistir no nosso sistema
//Ira ser manipulado a instâncias desses objetos

class DataBase{ 
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    //Busca para retornar determinado dado da base de dados
    find(key){ 
        return this.#storage[key]
    }

            //Authors

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

            //Books

    findBookByName(bookName){
        return this.#storage.books.find(b => b.name === bookName) //Retorna o nome do livro se ele existe
    }

    //Para Salvar um livro deve verificar se ele existe ou não no Storage para não salvar valores duplicados
    saveBook(book){
        const bookExist = this.findBookByName(book.name)
        if(!bookExist){
            this.#storage.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)                  //Só faz a operação se não for undefined
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)             //Só faz a operação se não for undefined
    }

            //Posters

    findPosterByName(posterName){
        return this.#storage.posters.find(p => p.name === posterName) 
    }

    savePoster(poster){
        const posterExist = this.findPosterByName(poster.name)
        if(!posterExist){
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)                  
    }

    removePosterFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)             
    }

            //Users
    
    saveUser(user){
        const userExist = this.#storage.users.find(u => u.email === user.email) // Verifica usuário pelo email
        if(!userExist){
            this.#storage.users.push(user)
        }
    }

            //Order

    saveOrder(order){
        this.#storage.orders.push(order)
    }

            //Storage

    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users.map(user  => user.data)) //Dados privados então deve fazer um map no getter de user
        console.table(this.#storage.orders.map(order => order.data)) //Dados privados então deve fazer um map no getter de order.

    }
}