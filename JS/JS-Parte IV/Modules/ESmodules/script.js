import {name, label as l, input, br} from "./functions.js"

console.log(l({for: "fullname", textContent: "Nome Completo"}))
console.log(input({id:"fullname", name: "fullname", placeholder:"Digite o seu nome..."}))
console.log(br())
console.log(name)