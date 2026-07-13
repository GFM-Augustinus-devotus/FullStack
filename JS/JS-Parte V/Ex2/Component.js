// Faça primeiro para Componente e tente Exportar ele para index.js e ver suas inteções na página HTML
export {Component}

class Component {
    
    #refElement // Armazena o tipo do Componente. Label, input, br ...

    constructor(element){
        this.#refElement = element 
    }
    getRefElement(){ // Método para acessar atributo privado
        return JSON.stringify(this.#refElement)
    }
}
