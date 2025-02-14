let comando = 0
let base = 0
let altura = 0
let lado = 0
let baseMaior = 0
let baseMenor = 0
let raio = 0

const pi = 3.14

function areaTriangulo(base , altura){
    return (base*altura)/2
}

function areaRetangulo(base , altura){
    return base*altura
}

function areaQuadrado(lado){
    return areaRetangulo(lado , lado)
}

function areaTrapezio(baseMaior , baseMenor, altura){
    return ((baseMaior + baseMenor)*altura)/2
}

function areaCircunferencia(raio){
    return pi*(Math.pow(raio , 2))
}

function executar(){
    do{
        comando = parseFloat(prompt(
            "Bem-vindo a Calculadora Geométrica!\n"+
            "Escolha uma figura geométrica\n\n"+
            "1. Triângulo\n"+
            "2. Retângulo\n"+
            "3. Quadrado \n"+
            "4. Trapézio \n"+
            "5. Circunferência \n"+
            "6. Sair"
    
        ))
        switch(comando){
    
            case 1:
            base = parseFloat(prompt("Informe a base do triângulo"))
            altura = parseFloat(prompt("Informe a altura do triângulo"))
            alert("Área do triângulo: " + areaTriangulo(base , altura))
            break;
    
            case 2:
            base = parseFloat(prompt("Informe a base do retângulo"))
            altura = parseFloat(prompt("Informe a altura do retângulo"))
            alert("Área do retângulo: " + areaRetangulo(base , altura))
            break;
    
            case 3:
            lado = parseFloat(prompt("Informe o lado do quadro"))
            alert("Área do quadrado: "+ areaQuadrado(lado))
            break;
    
            case 4:
            baseMaior = parseFloat(prompt("Informe a base maior do Trapézio"))
            baseMenor = parseFloat(prompt("Informe a base menor do Trapézio"))
            altura = parseFloat(prompt("Informe a altura do Trapézio"))
            alert("Área do trapézio: "+ areaTrapezio(baseMaior , baseMenor , altura))
            break;
    
            case 5:
            raio = parseFloat(prompt("Informe o raio da circunferência: "))
            alert("Área da circunferência: " + areaCircunferencia(raio))
            break;
    
            case 6:
            window.close()
            break;
    
        }
    
    }while(comando !== 6)
}

executar()

