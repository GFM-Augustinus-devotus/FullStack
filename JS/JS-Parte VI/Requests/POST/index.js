//Constrói os elementos na parte visual do site
function renderArticle(articleData){

    const article = document.createElement('article')
    article.classList.add('article')                    //Adicionando uma classe ao elemento criado
    article.id = `article-${articleData.id}`

    const title = document.createElement('h3')
    title.classList.add('article-title')                //Adicionando uma classe ao elemento criado
    title.textContent = articleData.title

    const content = document.createElement('p')
    content.classList.add('article-content')
    content.innerHTML = articleData.content             //Poderia aplicar um Servidor Reach text para identificar textos em negrito e itálico

    const author =  document.createElement('div')
    author.classList.add('class-author')
    author.textContent = articleData.author

    article.append(title, content, author)
    document.getElementById("articles").append(article)
}

//Puxar os dados da JSON, que está visível no meu JSON-Server
async function fetchArticles() {
    const articles = await fetch('http://localhost:3000/articles').then(resposta => resposta.json()) //Usa o await pois está esperando uma Promise
    articles.forEach(renderArticle)
}

document.addEventListener('DOMContentLoaded',  () =>{ //O fetch articles carrega depois de carregar a página. E quando a requisição redenriza ela aparece na tela
    fetchArticles()
})


//Post Request

const form = document.querySelector('form')

form.addEventListener('submit', async(ev) =>{
    ev.preventDefault()
    
    const articleData = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        content: document.querySelector('#content').value
    }

    const response = await fetch('http://localhost:3000/articles', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData) // Transform an object into a JSON string
    })

    const savedArticle = await response.json()
    form.reset()
    renderArticle(savedArticle)
    console.log(savedArticle)
})

