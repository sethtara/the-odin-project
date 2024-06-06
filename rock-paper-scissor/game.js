
arr=['rock','paper','scissors'];
const playBtn=document.querySelector(".btns");
const board=document.querySelector(".board");

playBtn.addEventListener("click",(e)=>{
    const humanSelection=e.target.innerText.toLowerCase();
    const computerSelection = getRandomInt(3);
    playRound(humanSelection, arr[computerSelection]);
});


let result=""
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        board.innerText="Draw";
        return 0;    }
    else if(humanChoice==="scissors" && computerChoice === "paper"){
        board.innerText="You Won";
        return 0;    }
    else if(humanChoice==="rock" && computerChoice === "scissors"){
        board.innerText="You Won";
        return 0;    }
    else if(humanChoice==="paper" && computerChoice === "rock"){
        board.innerText="You Won";
        return 0;
    }
    else {
        board.innerText="You Lost";
        return 0;
    }
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


