var temp = window.prompt("Please Enter Your Name:")
var userName = (temp === null ? "You" : temp)
const userNamechange = document.getElementById('userName');
const tableusername = document.getElementById('tableUserName');
computerChoice = "Stone"
var user = 0;
var compScore = 0;
userNamechange.innerText = userName;
tableusername.innerText = userName

document.addEventListener("click", (e) => {
    e.preventDefault();
    var generate = Math.ceil((Math.random()) * 3);
    switch (generate) {
        case 1:
            computerChoice = "Stone";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
})


// Chalo complex code likhte
const userInput = document.getElementById('userImg').style.backgroundImage;
// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "Stone" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Stone") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        user++;
        document.getElementById('userScore').innerText = user;
        if (user === 10) {
            document.getElementById('finalResult').innerText = `Congrats!! ${userName} Won`
            setTimeout(() => {
                if (window.confirm("Do You Want To Reply?")) {
                    user = 0;
                    compScore = 0;
                }
            }, 2000);
        }
        return "You win!";
    } else {
        compScore++;
        console.log(compScore)
        document.getElementById('compScore').innerText = compScore;
        if (compScore === 10) {
            document.getElementById('finalResult').innerText = "Sorry!! Computer Won"
            setInterval(() => {
                if (window.confirm("Do You Want To Reply?")) {
                    user = 0;
                    compScore = 0;
                }
            }, 2000);
        }
        return "Computer wins!";
    }
}

// Function to handle user choice and play the game
function playGame(userChoice) {
    const result = determineWinner(userChoice, computerChoice);
    console.log(userChoice, computerChoice)
    if (computerChoice === 'Stone') {
        document.getElementById('computerOption').style.backgroundImage = "url('/Images/computerStone.png')";
    }
    else if (computerChoice === 'Paper') {
        document.getElementById('computerOption').style.backgroundImage = "url('/Images/ComputerPaper.png')";
    }
    else {
        document.getElementById('computerOption').style.backgroundImage = "url('/Images/Scissor.png')";
    }
    document.getElementById("resultDisplay").innerText = result;
}

// Event listeners for button clicks
document.getElementById("stone").addEventListener("click", function () {
    document.getElementById('userImg').style.backgroundImage = 'url("/Images/Stone.png")';
    playGame("Stone");
});

document.getElementById("paper").addEventListener("click", function () {
    document.getElementById('userImg').style.backgroundImage = 'url("/Images/Paper.png")';
    playGame("Paper");
});

document.getElementById("scissor").addEventListener("click", function () {
    document.getElementById('userImg').style.backgroundImage = 'url("/Images/userScissor.png")';
    playGame("Scissors");
});
