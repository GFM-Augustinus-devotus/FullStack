const Comment =  require('./Comments')
const Author = require('./Author')

const Gabriel = new Author(8203, "Gabriel Melo", "melogabriel", "gabriel@gmail.com")

// Em vez de chamar o construtor de Post diretamente eu chamo a função createPost() de Author que assim criará um novo Post

const post1 = Gabriel.createPost(9956 , 'Nova Gerção da Seleção Brasileira', 'Creio que a seleção deve melhorar em vários pontos, mas nunca perder a sua essência')
const post2 = Gabriel.createPost(4160, 'Plov' , 'Sabia que o Plov é um prato típico do Uzbequistão feito de carne de carneiro e arroz')

const comment1 = new Comment(5465, 'Joaozinho', 'Belo comentário Gabriel, foi bem acertivo')
const comment2 = new Comment(7214, 'Mariazinha', 'Discordo do comentário Gabriel, creio que se equivocou nessa parte')
const comment3 = new Comment(1174, 'Pedrinho', 'Ótima dica Gabriel, vou comer esse prato')

post1.addComment(comment1)
post1.addComment(comment2)
post2.addComment(comment3)

//Author
console.log(Gabriel)
console.log("\n------------------\n")
//Posts do autor
Gabriel.listOfPost.forEach((post) =>{
    console.log(post)
})
console.log("\n------------------\n")
//Comentários dos posts do autor
Gabriel.listOfPost.forEach((post) =>{
    console.log(post.listOfComments)
})