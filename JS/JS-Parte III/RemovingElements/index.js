//Creatin new elements

function addContact(){
    const contactSection = document.getElementById('contacts-list')
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
    const phoneli = document.createElement('li')
    const phoneInput = document.createElement('input')
    phoneli.innerText = 'phone: '
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneli.appendChild(phoneInput)
    ul.appendChild(phoneli) 
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3 , ul)
}

function removeContact(){
    const cantactSection = document.getElementById('contacts-list')
    const titles = document.getElementsByTagName('h3')  // Get all the titles
    const contacts = document.getElementsByTagName('ul')   // Get all the contacts
    cantactSection.removeChild(titles[titles.length - 1])   // Remove the last contact
    cantactSection.removeChild(contacts[contacts.length - 1])
}