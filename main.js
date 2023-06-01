const playRound(playerSelection, computerSelection) {
    let player;
    let flag = true;
    while (flag) {
        switch(playerSelection.toLowerCase()) {
            case "rock":
                player = 1;
                flag = false;
                break;
            case "paper":
                player = 2;
                flag = false;
                break;
            case "scissor":
                player = 3;
                flag = false;
                break;
            default:
                console.log("wrong input");
                flag = true;
        }
    }
    let computer;
    flag = true;
    while (flag) {
        switch(playerSelection.toLowerCase()) {
            case "rock":
                computer = 1;
                flag = false;
                break;
            case "paper":
                computer = 2;
                flag = false;
                break;
            case "scissor":
                computer = 3;
                flag = false;
                break;
            default:
                console.log("wrong input");
                flag = true;
        }
    }
    if (computer === player) {
        return "tie!";
    }
    if (computer === 1) {
        if (player === 2) {
            return "player wins!";
        } else if (player === 3) {
            return "computer wins!";
        }
    }
    if (computer === 2) {
        if (player === 3) {
            return "player wins!";
        } else if (player === 1) {
            return "computer wins!";
        }
    }
    if (computer === 3) {
        if (player === 1) {
            return "player wins!";
        } else if (player === 2) {
            return "computer wins!";
        }
    }
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));