
function areaTriangulo(base,altura){
    let area = (base*altura)/2
    return area.toFixed(2)
}

function areaRetangulo(comprimento,largura){
    let area = (comprimento*largura)
    return area.toFixed(2)
}

function areaQuadrado(lado){
    let area = Math.pow(lado,2)
    return area.toFixed(2)
}

function areaTrapezio(baseMaior,baseMenor,altura){
    let area = ((baseMaior + baseMenor) * altura)/2
    return area.toFixed(2)
}

function areaCirculo(raio){
    let area = (Math.PI * Math.pow(raio,2))
    return area.toFixed(2)
}

//Adaptar a forma de coletar os valores para cada caso
function coletarValores(figura){
    console.log(figura)
    let ul = document.getElementById('calculadora')
    let medida1Label = document.createElement('label')
    let medida1 = document.createElement('input')
    let medida2Label = document.createElement('label')
    let medida2 = document.createElement('input')
    let medida3Label = document.createElement('label')
    let medida3 = document.createElement('input')
    let calcular = document.createElement('button')
    
    medida1Label.innerText = " medida 1 "
    medida2Label.innerText = " medida 2 "
    medida3Label.innerText = " medida 3 " 

    medida1.type = Text
    medida2.type = Text
    medida3.type = Text

    calcular    .innerText = "calcular"

    ul.append(medida1Label, medida1)
    ul.append(medida2Label,medida2)
    ul.append(medida3Label,medida3)
    ul.append(calcular)

    calcular.onclick(calcular(medida1.value,medida2.value,medida3.value))
    
}

function calcular(medida1,medida2,medida3){
    areaTriangulo(medida1,medida2)
}
