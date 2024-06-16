function getComputerChoice() {
  choices = ["ROCK", "PAPER", "SCISSOR"];

  choice = Math.floor(Math.random() * 3);

  return choices[choice];
}

function getHumanChoice() {
  choice = prompt("ROCK, PAPER, SCISSOR");
  choice = choice.toUpperCase();

  return choice;
}

function playRound(humanChoice, computerChoice) {
  // Rock Wins Scissor
  // Rock Loses to Paper
  // Paper Loses to Scissors
  // Scissors loses to Rock
  console.log("human choice is: " + humanChoice);
  console.log("Computer choice is: " + computerChoice);

  //ROCK
  if (humanChoice == "ROCK" && computerChoice == "PAPER") {
    console.log(`You Lose! ${computerChoice} ` + `beats ${humanChoice}`);
    computerScore++;
    console.log(
      `Your Score: ${humanScore} |||||||||` + `Computer Score: ${computerScore}`
    );
  } else if (humanChoice == "ROCK" && computerChoice == "SCISSOR") {
    console.log(`You Win! ${humanChoice} ` + `beats ${computerChoice}`);
    humanScore++;
    console.log(
      `Your Score: ${humanScore} |||||||||` + `Computer Score: ${computerScore}`
    );
  } else if (humanChoice == "ROCK" && computerChoice == "ROCK") {
    console.log("It's a TIE!!!");
    console.log(
      `Your Score: ${humanScore} |||||||||` + `Computer Score: ${computerScore}`
    );
    //END OF ROCK
  } //PAPER
  else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    console.log(`You Win! ${humanChoice} ` + `beats ${computerChoice}`);
    humanScore++;
    console.log(
      `Your Score: ${humanScore} |||||||||` +
        ` Computer Score: ${computerScore}`
    );
  } else if (humanChoice == "PAPER" && computerChoice == "SCISSOR") {
    console.log(`You Lose! ${computerChoice} ` + `beats ${humanChoice}`);
    computerScore++;
    console.log(
      `Your Score: ${humanScore} |||||||||` +
        ` Computer Score: ${computerScore}`
    );
  } else if (humanChoice == "PAPER" && computerChoice == "PAPER") {
    console.log("It's a TIE!!!!");
    console.log(
      `Your Score: ${humanScore} |||||||||` +
        ` Computer Score: ${computerScore}`
    );
    //END OF PAPER
  } // SCISSOR
  else if (humanChoice == "SCISSOR" && computerChoice == "PAPER") {
    console.log(`You Win! ${humanChoice} ` + `beats ${computerChoice}`);
    humanScore++;
    console.log(
      `Your Score: ${humanScore} |||||||||` +
        ` Computer Score: ${computerScore}`
    );
  } else if (humanChoice == "SCISSOR" && computerChoice == "ROCK") {
    console.log(`You Lose! ${computerChoice} ` + `beats ${humanChoice}`);
    computerScore++;
    console.log(
      `Your Score: ${humanScore} |||||||||` +
        ` Computer Score: ${computerScore}`
    );
  } else if (humanChoice == "SCISSOR" && computerChoice == "SCISSOR") {
    console.log("It's a TIE!!!!");
    console.log(
      `Your Score: ${humanScore} |||||||||` +
        ` Computer Score: ${computerScore}`
    );
  } // END OF SCISSOR

  return { computerScore, humanScore };
}
let humanScore = 0;
let computerScore = 0;
function playGame() {
  let round = 0;
  let humanScore = 0;
  let computerScore = 0;

  // repeat PLAYROUND 5 times

  for (i = 0; i < 5; i++) {
    //choice will repeat each cycle

    // Each Repeat Records Winner Score
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    const scores = playRound(humanChoice, computerChoice);
    round++;

    if (round === 5 && scores.computerScore > scores.humanScore) {
      console.log("COMPUTER is the winner!!!");
    } else if (round === 5 && scores.humanScore > scores.computerScore) {
      console.log("YOU are the winner!!!!");
    }
  }
}

playGame();
