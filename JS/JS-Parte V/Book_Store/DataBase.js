import { Author } from "./entities/Author"

export {DataBase}

//Storage é um objeto contendo vários arrays de vários objetos (Entidades do sistema)
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

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    findBookByName(bookName){
        return this.#storage.books.find(b => b.name === bookName) //Retorna o nome do livro se ele existe
    }

    //Para Salvar um livro dece-se verificar se ele existe no Storage para não salvar valores duplicados
    saveBook(){
        
    }

}