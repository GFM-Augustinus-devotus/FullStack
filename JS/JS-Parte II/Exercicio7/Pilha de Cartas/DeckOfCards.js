let deck = []
let command = ""
let card = ""

function startDeck(command){
    while(command !== "a"){
        switch (command) {

            case "show":
                if(deck.length === 0 ){
                    window.alert("The deck is empty!")
                    break
                }else{
                    window.alert(deck.length + " card(s) in the deck")
                    break
                }

            case "add":
                deck.push(window.prompt("Choose a card to add: "))
                break

            case "pull":
                if(deck.length === 0){
                    window.alert("The deck is empty!")
                    break
                }
                card = deck.pop()
                window.alert("Your card is: " + card)
                break

            case "exit":
                window.close()
                break
            default:
                window.alert("Invalid Option");
                break;

        }
    break
    }
}

document.addEventListener("DOMContentLoaded", function(){
    let option = document.querySelectorAll('input[name="deck"]')

    option.forEach(button => {
        button.addEventListener("change" , function(){
            command = this.value
            startDeck(command)
        })
    });
})