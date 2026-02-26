let balance = parseFloat(window.prompt("What is o account balance?"))
let num = 0
let value = 0

do{

    num = parseFloat(prompt("Your bank balance is "+ balance + " Which option do you choose?\n1-Get Cash\n2-Deposit\n3-Quit"))
    switch(num){
        case 1:
            value = parseFloat(window.prompt("How much do you want to Get?"))
            balance -= value
            break
        case 2:
            value = parseFloat(window.prompt("How much do you want to Deposit?"))
            balance += value
            break
        case 3:
            alert("See you later...")
            break5000
        default:
            alert("You chose an invalid option")
    }
}while(num !== 3)