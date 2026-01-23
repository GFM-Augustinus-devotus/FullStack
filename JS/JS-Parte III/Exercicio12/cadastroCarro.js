//funções auxiliares que serão Construtores de elementos no sistema
function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, name, value, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.type = type
    input.placeholder = placeholder
    return input
}

// Variáveis recebendo os eleemtos do sistema HTML
const addCarBtn = document.getElementById('addCar')
const form = document.getElementById('carInsert')
const cars = []
let qtdCars = 0

addCarBtn.addEventListener('click', function(){
    const stackInputs = document.getElementById('stackInputs')
    const newRow = document.createElement('li')
    const rowIndex = qtdCars
    qtdCars++
    newRow.id = 'inputRow-'+rowIndex
    newRow.className = 'inputRow'

    const carNameLabel = createLabel('Nome: ', 'carName-'+rowIndex)
    const carNameInput = createInput('carName-'+rowIndex, 'carName', null)

    const modelLabel = createLabel("Modelo: ")
    const id1 = 'modelRadio-'+ rowIndex + '.1'
    const modelRadio1 = createInput(id1, 'modelCar-'+rowIndex, 'mercedez', 'radio' )
    const modelLabel1 = createLabel('mercedez', id1)
    const id2 = 'modelRadio-'+ rowIndex + '.2'
    const modelRadio2 = createInput(id2, 'modelCar-'+rowIndex, 'BMW', 'radio' )
    const modelLabel2 = createLabel('BMW', id2)
    const id3 = 'modelRadio-'+ rowIndex + '.3'
    const modelRadio3 = createInput(id3, 'modelCar-'+rowIndex, 'Audi', 'radio' )
    const modelLabel3 = createLabel('Audi', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(carNameLabel, carNameInput, modelLabel, modelRadio1, modelLabel1 , modelRadio2 ,modelLabel2, modelRadio3, modelLabel3, removeRowBtn) // A linha é composta por vários elementos
    stackInputs.appendChild(newRow)
})

const cadastrar = document.getElementById('send')

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullname = document.getElementById('driverName')
    const inputRows = document.querySelectorAll('.inputRow')

    let carBrand = []
    inputRows.forEach(function(row){
        const brandName = document.querySelector('#'+ row.id + ' input[name="carName"]').value
        const brandModel = document.querySelector('#'+ row.id + ' input[type="radio"]:checked').value
        carBrand.push({name: brandName, model: brandModel})
    })

    const newCar = {fullname: fullname.value, carBrand: carBrand}

    cars.push(newCar)
    alert('Novo carro foi adicionado')

    fullname.value = ''
    inputRows.forEach(function(row){
        row.remove()
    })

    console.log(cars)
})