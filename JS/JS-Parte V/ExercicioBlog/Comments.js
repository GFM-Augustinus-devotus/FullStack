class Comment {
    constructor(id, authorName, content){
        this.id = id
        this.authorName = authorName
        this.content = content
        this.createdAt = new Date()
    }
}

module.exports = Comment