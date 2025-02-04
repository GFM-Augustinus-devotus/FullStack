
//mm cm dm m dam hm km

function convertToMeters(value, measure){
    switch(measure){
        case "mm":
            return  value/1000 + "m";
        case "cm":
            return  value/100 + "m";
        case "dm":
            return  value/10 + "m";
        case "m":
            return  value + "m";
        case "dam":
            return  value*10 + "m";
        case "hm":
            return  value*100 + "m";
        case "km":
            return  value*1000 + "m";
        default:
            return "Unidade não reconhecida";
    }
}

/* Receive de value from the Forntentd*/
/* The Unit is a String for now, i could use a radio box, and set a defeault value*/
/* The conversion is gonna work only when click on the button*/
/* The Return of the result is on the alert*/


document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("value");
    const select = document.getElementById("unit");
    const button = document.getElementById("convertButton");
    const result = document.getElementById("result");

    button.addEventListener("click", function() {
        event.preventDefault();
        const value = parseFloat(input.value);
        const unit = select.value;
        result.textContent = convertToMeters(value, unit);
    });
});

