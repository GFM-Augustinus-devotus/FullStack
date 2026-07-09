const Post = require('./Post')

class Author {
    constructor(id, name, nickname, email){
        this.id = id
        this.name = name
        this.nickname = nickname
        this.email = email
        this.listOfPost = []
    }

    createPost(idPost, titulo, content){
        const post = new Post(idPost, this, titulo, content)
        this.listOfPost.push(post)
        return post
    }
}

module.exports = Author