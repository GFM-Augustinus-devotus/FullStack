function playGame(game) {
    switch (game) {
        case "Crash Bandicoot":
            showModal("You are playing Crash Bandicoot");
            break;
        case "God of War":
            showModal("You are playing God of War");
            break;
        case "Gran Turismo":
            showModal("You are playing Gran Turismo");
            break;
        case "Yu-Gi-Oh":
            showModal("You are playing Yu-Gi-Oh");
            break;
        case "quit":
            showModal("Thanks for playing...", true);
            break;
        default:
            showModal("Invalid game selection");
            break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("chooseButton");

    button.addEventListener("click", function() {
        const selectedGame = document.querySelector('input[name="game"]:checked');
        if (selectedGame) {
            const gameValue = selectedGame.value;
            playGame(gameValue);
        } else {
            showModal("Por favor, selecione um jogo.");
        }
    });
});

function showModal(message, closeWindow = false) {
    const modal = document.getElementById("customModal");
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "block";

    setTimeout(function() {
        modal.style.display = "none";
        if (closeWindow) {
            window.close();
        }
    }, 2500);
}