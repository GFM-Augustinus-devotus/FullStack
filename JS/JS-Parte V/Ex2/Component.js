// Faça primeiro para Componente e tente Exportar ele para index.js e ver suas inteções na página HTML
export {Component}

//A classe Componente irá nos ajudar a trabalhar com o DOM

class Component {
    
    #refElement  = null// Armazena o nome genérico do componente criado

    constructor(tag, parent, options){ //Options se referem aos atributos do HTML
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }
    build(){ //Método para criar um elemento (Público)
        this.#refElement = document.createElement(this.tag)
        Object.assign(this.#refElement, this.options)
        return this
    }

    getRefElement(){ // Método para acessar atributo privado
        return this.#refElement
    }

    render(){ // Método para carregar o elemento criado dentro do elemento pai
        if(this.parent instanceof Component){
            this.parent.getRefElement().append(this.#refElement)
        }else{
            document.querySelector(this.parent).append(this.#refElement)
        }
    }
}
