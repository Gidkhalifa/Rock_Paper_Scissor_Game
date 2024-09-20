 // // selecting buttons
document.querySelector(".js-button-rock").addEventListener("click", () => {
  document.querySelector(".js-playerimage").src = "img/rock-emoji.png";
  play("Rock");
});

document.querySelector(".js-button-paper").addEventListener("click", () => {
  document.querySelector(".js-playerimage").src = "img/paper-emoji.png";
  play("Paper");
});

document.querySelector(".js-button-scissors").addEventListener("click", () => {
  document.querySelector(".js-playerimage").src = "img/scissors-emoji.png";
  play("Scissors");
});

// function that generat a random no
function computerMove() {
  number = Math.floor(Math.random() * 3) + 1;
  computermove = "";

  if (number === 1) {
    document.querySelector(".js-computer-image").src = "img/rock-emoji.png";
    computermove = "Rock";
  } else if (number === 2) {
    document.querySelector(".js-computer-image").src = "img/paper-emoji.png";
    computermove = "Paper";
  } else if (number === 3) {
    document.querySelector(".js-computer-image").src = "img/scissors-emoji.png";
    computermove = "Scissors";
  }
  return computermove;
}
scors=JSON.parse(localStorage.getItem("Game"))||{wins:0 ,loses:0, draws:0}


function play(playerMove) {
  const computermove = computerMove();
  result = ""; //new var to store our state, kama ni win lose or draw

  if (playerMove === "Rock") {
    if (computermove === "Scissors") {
      result = "You win";
      //   console.log("You win");
    } else if (computermove === "Paper") {
      result = "You lose";
      //   console.log("lose");
    } else if (computermove === "Rock") {
      result = "You draw";
      //   console.log("You draw");
    }
  } else if (playerMove === "Paper") {
    if (computermove === "Scissors") {
      result = "You lose";
      //   console.log("You lose");
    } else if (computermove === "Paper") {
      result = "You draw";
      //   console.log("You draw");
    } else if (computermove === "Rock") {
      result = "You win";
      //   console.log("You win");
    }
  } else if (playerMove === "Scissors") {
    if (computermove === "Scissors") {
      result = "You draw";
      //   console.log("You draw");
    } else if (computermove === "Paper") {
      result = "You win";
      console.log("You win");
    } else if (computermove === "Rock") {
      result = "You lose";
      //   console.log("You lose");
    }
  }

  if (result === "You win") scors.wins  += 1;
  else if (result === "You lose") scors.loses += 1;
  else if (result === "You draw") scors.draws += 1;
// 

localStorage.setItem("Game",JSON.stringify(scors))
  winner=""

  if(scors.wins>scors.loses){
    winner="you win"
  }
  else if(scors.loses> scors.wins){
    winner="Computer wins"
  }
  else if(scors.wins === scors.loses){
    winner ="its a draw"
  }

  document.querySelector(
    ".js-text"
  ).innerHTML = `Wins: ${scors.wins} Loses: ${scors.loses} Draws: ${scors.draws}`;

  document.querySelector(".js-games-played").innerHTML = `Games Played: ${
    scors.wins + scors.loses + scors.draws
  }  <br> overall winner   :${winner} `;
}
