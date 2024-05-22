
arr=['rock','paper','scissors'];


function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        alert('draw');
        return 0;    }
    else if(humanChoice==="scissors" && computerChoice === "paper"){
        alert('you won');
        return 0;    }
    else if(humanChoice==="rock" && computerChoice === "scissors"){
        alert('you won');
        return 0;    }
    else if(humanChoice==="paper" && computerChoice === "rock"){
        alert('you won');
        return 0;
    }
    else {
        alert('you lost');
        return 0;
    }


}

const humanSelection = prompt("Rock, Paper, Scissor:");
const computerSelection = getRandomInt(3);

playRound(humanSelection, computerSelection);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


