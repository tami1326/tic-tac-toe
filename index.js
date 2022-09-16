let cells = document.querySelectorAll(".cells");
cells = Array.from(cells);
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let currentPlayer = [];
let possibleMoves = 9;
let currentMoves = 0;

chosePlayer();

function chosePlayer() {
    let randomizer = Math.random();
    if (randomizer < 0.5) {
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }
}

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (cell.innerText != "") {
            return;
        }
        cell.innerText = currentPlayer;
        ++currentMoves;
        console.log(currentMoves, possibleMoves);
        checkForWinner(currentPlayer); 
        switchPlayer();

    })
})
function switchPlayer() {
    if(currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}
function checkForWinner(currentPlayer) {
    winningCombinations.forEach(function(combination) {
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer);
        if(check){
            displayWinningMessage();
        } else if(currentMoves == possibleMoves) {
            displayDraw();
        }
    })
}

function displayWinningMessage() {
    let finalMessage = document.getElementById("finalMessage");
    finalMessage.innerText = currentPlayer + " Wins!";
    finalMessage.style.display = 'block';
}

function displayDraw() {
    let finalMessage = document.getElementById("finalMessage");
    finalMessage.innerText = "It's a draw!";
    finalMessage.style.display = 'block';
}

function restartGame() {
    window.location.reload();
}
