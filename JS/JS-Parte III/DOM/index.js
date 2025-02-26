/*A função Show vinculada ao botão exibir irá chamar o DOM*/

function show(){
    //Obtendo um único elemento
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)

    //Obtendo vários elementos em um HTML Collection
    const contacts = document.getElementsByTagName('li')
    console.log(contacts)

    const constactClass = document.getElementsByClassName('contact-input')
    console.log(constactClass)

    //Obtendo vários elementos em um NodeList
    const contact2 = document.getElementsByName('contact2')
    console.log(contact2)

    const allContacts = document.querySelectorAll('.contact-input')
    console.log(allContacts)
}