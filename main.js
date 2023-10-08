function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
  const actions = ["rock", "paper", "scissors"];

  return getRandomItem(actions);
}

function playRound(playerSelection, computerSelection) {
  // Sanitise player input
  playerSelection = playerSelection.toLowerCase();

  let playerWon = false;

  if (playerSelection === computerSelection) {
    return "d";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWon = true;
  }

  if (playerWon) {
    return "p";
  } else {
    return "c";
  }
}

function play() {
  let playerScore = 0;
  let computerScore = 0;

  // for (let index = 0; index < 5; index++) {
  console.log("Round", index + 1);
  let playerSelection = prompt("Enter your choice: ");
  let computerSelection = getComputerChoice();

  console.log("Player choice: ", playerSelection);
  console.log("Computer choice: ", computerSelection);

  const results = playRound(playerSelection, computerSelection);

  switch (results) {
    case "d":
      console.log("Draw...");
      break;
    case "p":
      console.log(
        `You win! ${capitalizeFirstLetter(
          playerSelection
        )} beats ${capitalizeFirstLetter(computerSelection)}!`
      );
      playerScore++;
      break;
    case "c":
      console.log(
        `You loose! ${capitalizeFirstLetter(
          computerSelection
        )} beats ${capitalizeFirstLetter(playerSelection)}!`
      );
      computerScore++;
      break;
  }
  console.log(" ");

  // }

  console.log("Player Score: ", playerScore);
  console.log("Computer Score: ", computerScore);
}
