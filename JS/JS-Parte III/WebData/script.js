/*sessionStorage e localStorage são objetos de Window e nós podemos acessar suas
propriedades e funções. Lembrando da diferença de cada um
*/

document.getElementById('sessionBtn').addEventListener('click', function(){
    const information = document.getElementById('session').value
    sessionStorage.setItem('info', information)
    information.value = ''

})

document.getElementById('readSession').addEventListener('click', function(){
    alert("Informação armazenada no session storage é: "+ sessionStorage.getItem('info'))
})

document.getElementById('localBtn').addEventListener('click', function(){
    const localInformation = document.getElementById('local').value
    localStorage.setItem('info', localInformation)
    localInformation.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    alert("Informação armazada no local storage é: "+ localStorage.getItem('info'))
})

/* Cookies: Ele é um objeto de document. Eles são uma string no console. No caso */

document.getElementById('cookieBtn').addEventListener('click', function(){
    //CookieName= value ; expires= UTCStringData ; path= / ;
    const input = document.getElementById('cookie')
    const cookie = 'info=' + input.value + ';'
    const expires = 'expires=' + new Date(2026,5,22) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expires + path
    console.log(document.cookie)
    input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    //CookieName= value ; expires= UTCStringData ; path= / ;
    const input = document.getElementById('cookie2')
    const cookie = 'info2=' + input.value + ';'
    const expires = 'expires=' + new Date(2026,5,22) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expires + path
    console.log(document.cookie)
    input.value = ''
})