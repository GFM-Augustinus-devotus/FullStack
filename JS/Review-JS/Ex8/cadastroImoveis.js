// references updated inside functions
let imoveis = document.getElementById("imoveis");
let quantidadeImoveis = document.getElementById("quantidadeImoveis")
let listaImoveis = [];


function criarImovel(prop, quarto, banheiro, garagem) { // Construtor de um objeto
    return { prop, quarto, banheiro, garagem };
}

function cadastrar() { // Pegando valores

    const proprietarioEl = document.getElementById("proprietario")
    const quartosEl = document.getElementById("quantidadeQuartos")
    const banheiroEl = document.getElementById("quantidadeBanheiro")

    const prop = proprietarioEl.value.trim()
    const quartos = parseInt(quartosEl.value, 10) || 0
    const banheiro = parseInt(banheiroEl.value, 10) || 0

    if (!prop) {
        alert("Por favor informe o nome do proprietário.")
        proprietarioEl.focus()
        return
    }
    const imovel = criarImovel(prop, quartos, banheiro, vericarGaragem())
    listaImoveis.push(imovel)

    proprietarioEl.value = ""
    quartosEl.value = ""
    banheiroEl.value = ""


    atualizarLista()
    atualizarQuantidade()
    console.log(listaImoveis)
    quantidadeImoveis.innerText = listaImoveis.length
}

function vericarGaragem(){
    const garagemSim = document.getElementById("sim")
    const garagemNao = document.getElementById("não")

    if(garagemSim.checked){
        return "Sim"
    }else if(garagemNao.checked){
        return "Não"
    }else{
        alert("Informe se o imóvel tem garagem")
    }
}

//Toda atualização da lista, apaga o que está sendo mostrado e depois colocar os dados da lista na parte visual

function atualizarLista() {
    imoveis.innerHTML = ""
    listaImoveis.forEach((imovel, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index + 1} - Proprietário: ${imovel.prop}\nQuartos: ${imovel.quarto} \nBanheiros: ${imovel.banheiro}\nPossui garagem? ${imovel.garagem}`;
        imoveis.append(li);
    });
}

function atualizarQuantidade() {
    const quantidadeLabel = document.querySelector("label[for=quantidadeImoveis]");
    if (quantidadeLabel) {
        quantidadeLabel.textContent = `Quantidade de imóveis: ${listaImoveis.length}`;
    }
}

function sair() {

    atualizarLista();
    alert("Saindo do cadastro. Total de imóveis: " + listaImoveis.length);
}

// setup inicial
atualizarQuantidade();


