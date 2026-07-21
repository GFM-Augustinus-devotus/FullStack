import { Component } from "./Component.js"
import { Label } from "./Label.js"
import { Input } from "./Input.js"
import { Form } from "./Form.js"

const title = new Component('h1', 'body', {textContent: "Olá mundo"}) // Ao instanciar um novo objeto já é feito um bnuild()
console.log(title)
title.render()

title.tag = 'h3'
title.build().render() // Ficou dois elementos title sendo um h1 e o outro h3 pois não foi criado nenhuma forma de excluir o build anterior

const form  = new Form('body')

const label = new Label('Nome: ', form, {htmlFor: 'nameInput'})

const input = new Input(form, {id: 'nameInput', name: 'name'})

//Renderizar os elementos e colocar dentro do Form

form.render()
label.render()
form.addChildren(input)

form.addChildren( //Posso criar instâncias dentro da própri função de adicionar elementos a um formulário
    new Component('br'),
    new Component('br'),
    new Label('Data de nascimento: ', form, {htmlFor: ' birthdayInput'}),
    new Input(form, {id: 'birthdayInput', name: 'birthday', type: 'date'})
)