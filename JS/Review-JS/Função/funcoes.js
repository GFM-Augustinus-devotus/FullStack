function ola(){ // Isso é apenas a declaração da Função
    console.log("Olá mundo")
}

ola //referencia a função como variável mas não a executa

for(let i = 0 ; i < 5; i++){
    ola() // Aqui está chamando a função
}