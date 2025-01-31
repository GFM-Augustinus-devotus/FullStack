
//mm cm dm m dam hm km

function convertToMeters(value, measure){
    switch(measure){
        case "mm":
            window.alert("resultado: " + value/1000 + "m");
            break
        case "cm":
            window.alert("resultado: " + value/100 + "m");
            break
        case "dm":
            window.alert("resultado: " + value/10 + "m");
            break
        case "m":
            window.alert("resultado: " + value + "m");
            break
        case "dam":
            window.alert("resultado: " + value*10 + "m");
            break
        case "hm":
            window.alert("resultado: " + value*100  + "m");
            break
        case "km":
            window.alert("resultado: " + value*1000 + "m");
            break
    }
}

let value = parseFloat(prompt("Digite o valor: "));
let measure = prompt("Digite a medida: ");

convertToMeters(value, measure);

