const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){ //Evento principal de submissão dos dados do formulário

    ev.preventDefault() //Previnir o comportamento padrão de um formulário

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observation"]').value

    let salad = ''

    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += item.value + ' '
    })

    let resposta = "Nome: " + name +"\nEndereço: " + address + "\nTipo de pão: " + breadType + "\nRecheio: " + "\n- " + main + " " + salad + "\nObservação: "+ observations

    console.log(
        resposta
    )
    alert(resposta)
})