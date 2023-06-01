var playerAggregate = 0, computerAggregate = 0;
var winner;

function playRound(playerSelection, computerSelection) {
    const player = playerSelection;

    let computer = computerSelection;
    
    if (computer === player) {
        return "tie!";
    }

    if (computer === 1) {
        if (player === 2) {
            playerAggregate++;
            return "player wins!";
        } else if (player === 3) {
            computerAggregate++;
            return "computer wins!";
        }
    }

    if (computer === 2) {
        if (player === 3) {
            playerAggregate++;
            return "player wins!";
        } else if (player === 1) {
            computerAggregate++;
            return "computer wins!";
        }
    }
    
    if (computer === 3) {
        if (player === 1) {
            playerAggregate++;
            return "player wins!";
        } else if (player === 2) {
            computerAggregate++;
            return "computer wins!";
        }
    }
}

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    return randomIndex;
}

function makeMove(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById("result").innerHTML = result;
    if (playerAggregate === 3 || computerAggregate === 3) {
        if (playerAggregate === 3) {
            winner = 0;
        } else winner = 1;
        showWinner();
    }
}

function setButton() {
    document.getElementById("yes").innerHTML = "yes";
    document.getElementById("no").innerHTML = "no";
}

function showWinner() {
    const choice = ["Player", "Computer"];
    document.getElementById("result").innerHTML = "The winner is " + choice[winner] + "!!";
    document.getElementById("result").innerHTML = "Wanna try again?";
    setButton();
}
