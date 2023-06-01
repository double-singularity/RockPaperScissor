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
}