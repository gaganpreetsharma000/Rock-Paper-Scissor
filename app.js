
let choices = document.querySelectorAll(".choice");
let scoreBoard = document.querySelectorAll(".score");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score"); // Add '#' before user-score
let compScorePara = document.querySelector("#comp-score"); // Add '#' before comp-score

let userScore = 0;
let compScore = 0;

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3); // Corrected Math.random() usage
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    // Generating computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})