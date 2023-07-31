const homeScoreBoard = document.querySelector('.score-home');
const guestScoreBoard = document.querySelector('.score-guest');
let homeScore = 0;
let guestScore = 0;

function updateHomeScore() {
  homeScoreBoard.textContent = homeScore;
}

function updateGuestScore() {
  guestScoreBoard.textContent = guestScore;
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  updateHomeScore();
  updateGuestScore();
}

//Home Scoring buttons
function homeAdd1() {
  homeScore += 1;
  updateHomeScore();
}

function homeAdd2() {
  homeScore += 2;
  updateHomeScore();
}

function homeAdd3() {
  homeScore += 3;
  updateHomeScore();
}

//Guest Scoring buttons
function guestAdd1() {
  guestScore += 1;
  updateGuestScore();
}

function guestAdd2() {
  guestScore += 2;
  updateGuestScore();
}

function guestAdd3() {
  guestScore += 3;
  updateGuestScore();
}
