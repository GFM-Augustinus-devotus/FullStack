function register(ev){
    console.log(ev)
    const selectionElement = ev.currentTarget.parentNode // pega o elemento pai do elemento que sofreu o evento
    const userName = selectionElement.children.username.value
    const password = selectionElement.children.password.value
    const passwordConfirmation = selectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert('Usuário ' + userName + ' registrado!')
        console.log({userName, password, passwordConfirmation})
    }else{
        alert('As senhas devem ser iguais!')
    }
}

const button = document.getElementById("register-button")

button.addEventListener('click', register)
// Agora vamos remover os eventos por quetão de segurança
function remove(){
    button.removeEventListener('click', register)
    alert('Event removed')
}

//colocando outro evento no memso elemento

button.addEventListener('mouseover', function(ev){
    console.log(ev.currentTarget)
})



