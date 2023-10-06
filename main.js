function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getComputerChoice() {
  const actions = ["rock", "paper", "scissors"];

  return getRandomItem(actions);
}

function playRound(playerSelection, computerSelection) {
    // Sanitise player input
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
}

playRound("ROCK", getComputerChoice());