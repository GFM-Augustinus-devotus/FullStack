import { Component } from "./Component.js";

export {Form}

class Form extends Component {
    constructor( parent, options){
        super('form', parent, options)
    }
    addChildren(...children){ // Children é um array de todos os elementos Filhos do Form. Além disso que cada child é uma instância de componebnt
        children.forEach(child => {
            this.getRefElement().appendChild(child.getRefElement())
        })
    }
}