// challenge 1: Your age in Days



function ageInDays() {

  let birthYear = prompt('What year were you born... Good friend');
  let daysOld = (2020 - birthYear) *  365;
  if (birthYear == null || undefined) {
    daysOld = 0;
  }
  let h1 = document.createElement('h1');
  let textAnswer = document.createTextNode('you are: ' + daysOld + ' days old');
  h1.setAttribute('id', 'daysOld');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
};

function reset() {
  document.getElementById('daysOld').remove();
};

// challenge 2: Coco Generator
/* my way
function coco() {
  let img = document.createElement('img');
  img.setAttribute('src', './static/css/images/IMG_7262.jpg');
  document.getElementById('flex-dog-gen').appendChild(img);
} */

var co = document.getElementById('bye');

function coco() {
  let scrs = ['./static/css/images/IMG_7262.jpg', './static/css/images/IMG_7290.PNG', './static/css/images/IMG_7291.PNG', './static/css/images/IMG_7292.PNG', './static/css/images/IMG_7293.PNG', './static/css/images/IMG_7294.PNG', './static/css/images/IMG_7295.PNG', './static/css/images/IMG_7296.PNG', './static/css/images/IMG_7297.PNG', './static/css/images/IMG_7298.PNG', './static/css/images/IMG_7299.PNG', './static/css/images/IMG_7300.PNG']
  let i = Math.floor(Math.random() * 12)

  let img = document.createElement('img');
  let div = document.getElementById('flex-dog-gen');
  img.src = scrs[i];
  img.setAttribute('id', 'bye');
  div.appendChild(img);
  return div
};

/*function remoce() {
  if (document.getElementById('bye') != undefined || null) {
    document.getElementById("bye").remove();
  }
}*/

function remoce() {
  let byeco = document.querySelector('.flex-box-container-2').querySelectorAll('img')
  // console.log(byeco);
  for (let i = 0; i < byeco.length; i++) {
    byeco[i].remove();
  }
}



// Challenge 3: Rock Paper Sciccors


// my code for it
/* function rpsGame(yourChoice) {
  console.log(yourChoice.id);
  let botChoice;
  let humanChoice = yourChoice.id;
  let message;
  let rand = Math.floor(Math.random(1) * 3);
  if (rand == 0) {
    botChoice = "rock";
  } else if (rand == 1) {
    botChoice = "paper";
  } else if (rand == 2) {
    botChoice = "scissor";
  };
  if (botChoice == humanChoice) {
    message = "Tie";
  } else if (botChoice == 'rock' && humanChoice == 'paper') {
    message = "You win";
  } else if (botChoice == "rock" && humanChoice == 'scissor') {
    message = "You lose";
  } else if (botChoice == "paper" && humanChoice == 'scissor') {
    message = "You win";
  } else if (botChoice == "paper" && humanChoice == 'rock') {
    message = "You lose";
  } else if (botChoice == "scissor" && humanChoice == 'rock') {
    message = "You win";
  } else if (botChoice == "scissor" && humanChoice == 'paper') {
    message = "You lose";
  } else {
    message = "Broken"
  }
  //let humanChoices = document.getElementById('flex-box-rps-div').createElement("img");
  let div = document.getElementById('flex-box-rps-div');
  let h1 = document.createElement("h1");
  let messages = document.createTextNode(message);
  h1.appendChild(messages);
  div.appendChild(h1)
} */

function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);
  results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
  console.log(results);
  message = finalMessage(results); // {'message': 'You won!', 'color': 'green'}
  console.log(message)
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
  let rpsDatabase = {
    'rock': {
      'scissor': 1,
      'rock': 0.5,
      'paper': 0,
    },
    'paper': {
      'rock': 1,
      'paper': 0.5,
      'scissor': 0,
    },
    'scissor': {
      'rock': 0,
      'paper': 1,
      'scissor': 0.5,
    }
  };

  let yourScore = rpsDatabase[yourChoice][computerChoice];
  let computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return {'message': 'You lost!', 'color': 'red'};
  } else if (yourScore === 0.5) {
    return {'message': 'You tied!', 'color': 'yellow'};
  } else {
    return {'message': 'You won!', 'color': 'green'};
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissor': document.getElementById('scissor').src,
  }

  // remove all images when clicked
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  let humanDiv = document.createElement('div');
  let botDiv = document.createElement('div');
  let messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height='150px' width='150px' style='box-shadow: 0px 0px 50px blue'>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height='150px' width='150px' style='box-shadow: 0px 0px 50px red'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv)
  document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// challenge 4

let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'green') {
    buttonsGreen();
  } else if (buttonThingy.value === 'reset') {
    buttonReset();
  } else if (buttonThingy.value ===  'random') {
    randomColor();
  }
};

 function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger')
  }
}

function buttonsGreen() {
 for (let i = 0; i < all_buttons.length; i++) {
   all_buttons[i].classList.remove(all_buttons[i].classList[1]);
   all_buttons[i].classList.add('btn-success')
 }
}

function buttonReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    let j = copyAllButtons[i]
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(j);
  }
}

function randomColor() {
  let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[Math.floor(Math.random() * 4)]);
  }
}

// challenge 5 blackjack

// cool on mouseover document.querySelector('#blackjack-hit-button').addEventListener('mouseover', blackjackHit);

let blackjackGame = {
  'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
  'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
  'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
  'wins': 0,
  'losses': 0,
  'draws': 0,
  'isStand': false,
  "turnsOver": false,
}

const YOU = blackjackGame.you
const DEALER = blackjackGame.dealer

const hitSound = new Audio('./static/css/sounds/swish.m4a');
const winSound = new Audio('./static/css/sounds/cash.mp3')
const lossSound = new Audio('./static/css/sounds/aww.mp3')


document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);


function blackjackHit() {
  if (blackjackGame.isStand === false) {
  let card = randomCard();
  showCard(card, YOU);
  updateScore(card, YOU)
  showScore(YOU);
}
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13)
  return blackjackGame.cards[randomIndex];
}


function showCard(card, activePlayer) {
  if (activePlayer.score <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `./static/css/images/${card}.png`;
    document.querySelector(activePlayer.div).appendChild(cardImage);
    hitSound.play();
  }
};

function blackjackDeal() {
  if (blackjackGame.turnsOver === true) {

  blackjackGame.isStand = false;
  let yourImages = document.querySelector('#your-box').querySelectorAll('img');
  let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

  for (let i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }
  for (let i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
  YOU.score = 0;
  DEALER.score = 0;

  document.querySelector(YOU.scoreSpan).textContent = '0';
  document.querySelector(YOU.scoreSpan).style.color = 'white'
  document.querySelector(DEALER.scoreSpan).textContent = '0';
  document.querySelector(DEALER.scoreSpan).style.color = 'white';

  document.querySelector('#blackjack-result').textContent = "Let's play";
  document.querySelector('#blackjack-result').style.color = "black";

  blackjackGame.turnsOver = true;
  }
}

function updateScore(card, activePlayer) {
  // if adding 11 keeps me below 21
  if (card === 'A') {

  if (activePlayer.score + blackjackGame.cardsMap[card][1] <= 21) {
    activePlayer.score += blackjackGame.cardsMap[card][1];
  } else {
    activePlayer.score += blackjackGame.cardsMap[card][0];
  }
} else {
  activePlayer.score += blackjackGame.cardsMap[card];
}

  /* if (blackjackGame.cardsMap[card][1] === 11 || blackjackGame.cardsMap[card][0] === 1 && activePlayer.score <= 10) {
    let card0 = 11;
    console.log(card0);
    activePlayer.score += card0;
  } else if (blackjackGame.cardsMap[card][1] === 11 || blackjackGame.cardsMap[card][0] === 1 && activePlayer.score >= 11) {
    let card1 = 1;
    console.log(card1);
    activePlayer.score += card1;
  } else {
    activePlayer.score += blackjackGame.cardsMap[card];
  } my way */
}

function showScore(activePlayer) {
  if (activePlayer.score > 21)  {
    document.querySelector(activePlayer.scoreSpan).textContent = "BUST";
    document.querySelector(activePlayer.scoreSpan).style.color = "red";
  } else {
  document.querySelector(activePlayer.scoreSpan).textContent = activePlayer.score;
 }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function dealerLogic() {
  blackjackGame.isStand = true;

  while (DEALER.score < 16 && blackjackGame.isStand === true) {
  let card = randomCard();
  showCard(card, DEALER);
  updateScore(card, DEALER)
  showScore(DEALER);
  await sleep(1000);
}
    blackjackGame.turnsOver = true;
    let winner = computeWinner();
    showResult(winner)
}

// compute winner and return who just won
// update the wins, draws, and losses
function computeWinner() {
  let winner;

  if (YOU.score <= 21) {
    // condition: higher score than dealer or when dealer busts but you're 21 or under
    if (YOU.score > DEALER.score || (DEALER.score > 21)) {
      blackjackGame.wins++;
      winner = YOU
    } else if (YOU.score < DEALER.score) {
      blackjackGame.losses++;
      winner = DEALER
    } else if (YOU.score === DEALER.score) {
      blackjackGame.draws++;
    }

    // condition: when user busts but dealer doenst
  } else if (YOU.score > 21 && DEALER.score <= 21) {
    blackjackGame.losses++;
    winner = DEALER;


    // condition: when you AND the Dealer busts
  } else if (YOU.score > 21 && DEALER.score > 21) {
    blackjackGame.draws++;
  }

  return winner
}

function showResult(winner) {
  let message, messageColor;

  if (blackjackGame.turnsOver === true) {
  if (winner === YOU) {
    document.querySelector('#wins').textContent = blackjackGame.wins;
    message = 'You won!';
    messageColor = 'green';
    winSound.play();
  } else if (winner === DEALER) {
    document.querySelector('#losses').textContent = blackjackGame.losses;
    message = 'You lost!';
    messageColor = 'red';
    lossSound.play();
  } else {
    document.querySelector('#draws').textContent = blackjackGame.draws;
    message = 'You drew!';
    messageColor  = 'black';
  }
  document.querySelector('#blackjack-result').textContent = message;
  document.querySelector('#blackjack-result').style.color = messageColor;
  }
}

















// 3
