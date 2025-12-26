//When you click on the button, a new element is created and added to the list

function addInput(){

    const ul = document.getElementById('inputs') // nó no qual iremos colocar os nossos novos elementos

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'novo input: '
    newLi.innerHTML = '<span> Item 1 </span>' // Propriedade perigosa, injetar scripts

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    const newInput2 = document.createElement('br') // Coloquei espaço entre os li's
    newInput2.name = 'br'

    //Using the nodes to add a new element
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
    ul.appendChild(newInput2)
}