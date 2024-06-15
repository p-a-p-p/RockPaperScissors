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
  let humanScore = 0;
  let computerScore = 0;

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

  return computerScore, humanScore;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // repeat PLAYROUND 5 times

  for (i = 0; i < 5; i++) {
    //choice will repeat each cycle
    humanScore;
    computerScore;
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  // Each Repeat Records Winner Score
  // After 5 rounds, declare winner depending on score
}

playGame();
