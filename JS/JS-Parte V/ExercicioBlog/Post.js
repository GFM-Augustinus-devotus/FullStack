//Vou ter que criar um construto para Post
class Post {
    constructor(id, author, titulo, content){
        this.id = id
        this.author = author
        this.titulo = titulo
        this.content = content
        this.listOfComments = [] // Array de commentários
    }

    addComment(comment){ // Passa como parâmento uma instância de comentário
        this.listOfComments.push(comment)
    }
}

module.exports = Post