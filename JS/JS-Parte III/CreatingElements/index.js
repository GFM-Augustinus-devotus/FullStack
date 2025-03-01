//When you click on the button, a new element is created and added to the list

function addInput(){

    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    //Using the nodes to add a new element
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}