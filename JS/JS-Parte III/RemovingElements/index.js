//Creatin new elements

function addContact(){
    const contactSection = document.getElementById('contact-list')
    const h3 = document.createElement('h3')
    const ul = document.createElement('ul')
    const nameLi = document.createElement('li')
    const nameInput = document.createElement('input')
    
    //Creating Contacts Names
    h3.innerText = 'contacts'
    nameLi.innerText = 'name: '
    nameInput.type = 'text'
    nameInput.name = 'fullname'

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    //Creatting Contacts Phones
}