//When you click on the button, a new element is created and added to the list

function addInput(){

    const ul = document.getElementById('inputs') // nó no qual iremos colocar os nossos novos elementos

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    const newInput2 = document.createElement('br') // Coloquei espaço entre os li's
    newInput2.name = 'br'

    const newHr = document.createElement('hr')
    newHr.name = 'hd'

    //Using the nodes to add a new element
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
    ul.appendChild(newInput2)
    ul.appendChild(newHr)
}