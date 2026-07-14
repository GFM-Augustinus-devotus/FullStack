// Faça primeiro para Componente e tente Exportar ele para index.js e ver suas inteções na página HTML
export {Component}

//A classe Componente irá nos ajudar a trabalhar com o DOM

class Component {
    
    #refElement  = null// Armazena o tipo do Componente. Label, input, br ...

    constructor(tag, parent, options){ //Options se referem aos atributos do HTML
        this.tag = tag
        this.parent = parent
        this.options = options //As options de uma Tag são os atributos de um objeto
    }
    build(){ //Método para criar um elemento (Público)
        this.#refElement = document.createElement(this.tag)
    }

    getRefElement(){ // Método para acessar atributo privado
        return JSON.stringify(this.#refElement)
    }
}
