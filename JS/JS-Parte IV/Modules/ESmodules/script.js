import {name, label, input, br} from "./functions.js"

console.log(label({for: "fullname", textContent: "Nome Completo"}))
console.log(input({id:"fullname", name: "fullname", placeholder:"Digite o seu nome..."}))
console.log(br())
console.log(name)