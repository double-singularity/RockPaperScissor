var playerAggregate = 0, computerAggregate = 0;
var winner;

function playRound(playerSelection, computerSelection) {
    let player;

    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection) {
        case "rock":
            player = 1;
            flag = false;
            break;
        case "paper":
            player = 2;
            flag = false;
            break;
        case "scissors":
            player = 3;
            flag = false;
            break;
        default:
    }

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

while (true) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("select your choice!");
    const result = playRound(playerSelection, computerSelection);
    document.getElementById("result").innerHTML = result;
    if (playerAggregate === 3 || playerAggregate === 3) {
        if (playerAggregate === 3) {
            winner = 0;
        } else winner = 1;
        break;
    }
}

const choice = ["Player", "Computer"];

document.getElementById("result").innerHTML = "The winner is " + choice[winner] + "!!";
