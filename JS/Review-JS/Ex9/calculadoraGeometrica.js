let figuraAtual = ''

function setResultado(text) {
    const out = document.getElementById('resultado')
    if (out) {
        out.textContent = text
    } else {
        console.log(text)
    }
}

function areaTriangulo(base, altura) {
    let area = (base * altura) / 2
    return area.toFixed(2) 
}

function areaRetangulo(comprimento, largura) {
    let area = comprimento * largura
    return area.toFixed(2)
}

function areaQuadrado(lado) {
    let area = Math.pow(lado, 2)
    return area.toFixed(2)
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    let area = ((baseMaior + baseMenor) * altura) / 2
    return area.toFixed(2)
}

function areaCirculo(raio) {
    let area = Math.PI * Math.pow(raio, 2)
    return area.toFixed(2)
}

function coletarValores(figura) {
    figuraAtual = figura
    const ul = document.getElementById('calculadora')
    const resultado = document.getElementById('resultado')

    if (resultado) {
        resultado.textContent = ''
    }

    ul.innerHTML = ''

    if (figura === 'triangulo') {
        const baseLabel = document.createElement('label')
        const base = document.createElement('input')
        const alturaLabel = document.createElement('label')
        const altura = document.createElement('input')

        baseLabel.innerText = 'Base'
        base.id = 'base'
        base.type = 'number'
        base.step = 'any'

        alturaLabel.innerText = 'Altura'
        altura.id = 'altura'
        altura.type = 'number'
        altura.step = 'any'

        ul.append(baseLabel, base)
        ul.append(alturaLabel, altura)
        ul.append(document.createElement('br'))

    } else if (figura === 'retangulo') {
        const comprimentoLabel = document.createElement('label')
        const comprimento = document.createElement('input')
        const larguraLabel = document.createElement('label')
        const largura = document.createElement('input')

        comprimentoLabel.innerText = 'Comprimento'
        comprimento.id = 'comprimento'
        comprimento.type = 'number'
        comprimento.step = 'any'

        larguraLabel.innerText = 'Largura'
        largura.id = 'largura'
        largura.type = 'number'
        largura.step = 'any'

        ul.append(comprimentoLabel, comprimento)
        ul.append(larguraLabel, largura)
        ul.append(document.createElement('br'))

    } else if (figura === 'quadrado') {
        const ladoLabel = document.createElement('label')
        const lado = document.createElement('input')

        ladoLabel.innerText = 'Lado'
        lado.id = 'lado'
        lado.type = 'number'
        lado.step = 'any'

        ul.append(ladoLabel, lado)
        ul.append(document.createElement('br'))

    } else if (figura === 'trapezio') {
        const baseMaiorLabel = document.createElement('label')
        const baseMaior = document.createElement('input')
        const baseMenorLabel = document.createElement('label')
        const baseMenor = document.createElement('input')
        const alturaLabel = document.createElement('label')
        const altura = document.createElement('input')

        baseMaiorLabel.innerText = 'Base maior'
        baseMaior.id = 'baseMaior'
        baseMaior.type = 'number'
        baseMaior.step = 'any'

        baseMenorLabel.innerText = 'Base menor'
        baseMenor.id = 'baseMenor'
        baseMenor.type = 'number'
        baseMenor.step = 'any'

        alturaLabel.innerText = 'Altura'
        altura.id = 'altura'
        altura.type = 'number'
        altura.step = 'any'

        ul.append(baseMaiorLabel, baseMaior)
        ul.append(baseMenorLabel, baseMenor)
        ul.append(alturaLabel, altura)
        ul.append(document.createElement('br'))

    } else if (figura === 'circulo') {
        const raioLabel = document.createElement('label')
        const raio = document.createElement('input')

        raioLabel.innerText = 'Raio'
        raio.id = 'raio'
        raio.type = 'number'
        raio.step = 'any'

        ul.append(raioLabel, raio)
        ul.append(document.createElement('br'))
    }
}

function calcularValor() {
    if (!figuraAtual) {
        setResultado('Selecione uma figura para poder calcular')
        return
    }

    let area

    if (figuraAtual === 'triangulo') {
        const base = parseFloat(document.getElementById('base').value)
        const altura = parseFloat(document.getElementById('altura').value)
        if (isNaN(base) || isNaN(altura)) {
            setResultado('Digite valores numéricos válidos')
            return
        }else if(base < 0 || altura < 0){
            setResultado("Digite apenas medidas positivas")
            return
        }else{
            area = areaTriangulo(base, altura)
        }
        
    } else if (figuraAtual === 'retangulo') {
        const comprimento = parseFloat(document.getElementById('comprimento').value)
        const largura = parseFloat(document.getElementById('largura').value)
        if (isNaN(comprimento) || isNaN(largura)) {
            setResultado('Digite valores numéricos válidos')
            return
        }else if(comprimento < 0 || largura < 0){
            setResultado("Digite apenas medidas positivas")
            return
        }else{
            area = areaRetangulo(comprimento, largura)
        }
    } else if (figuraAtual === 'trapezio') {
        const baseMaior = parseFloat(document.getElementById('baseMaior').value)
        const baseMenor = parseFloat(document.getElementById('baseMenor').value)
        const altura = parseFloat(document.getElementById('altura').value)
        if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
            setResultado('Digite valores numéricos válidos')
            return
        }else if(baseMaior < 0 || baseMenor < 0 ||altura < 0){
            setResultado("Digite apenas medidas positivas")
            return
        }else{
            area = areaTrapezio(baseMaior, baseMenor ,altura)
        }
    } else if (figuraAtual === 'quadrado') {
        const lado = parseFloat(document.getElementById('lado').value)
        if (isNaN(lado)) {
            setResultado('Digite valores numéricos válidos')
            return
        }else if(lado < 0){
            setResultado("Digite apenas medidas positivas")
            return
        }else{
            area = areaQuadrado(lado)
        }
    } else if (figuraAtual === 'circulo') {
        const raio = parseFloat(document.getElementById('raio').value)
        if (isNaN(raio)) {
            setResultado('Digite valores numéricos válidos')
            return
        }else if(raio < 0){
            setResultado("Digite apenas medidas positivas")
            return
        }else{
            area = areaCirculo(raio)
        }
    }
    setResultado(`Valor da área: ${area}`)
}

