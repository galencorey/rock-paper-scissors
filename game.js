var Game = function(){
  this.playerCount = 0;
  this.computerCount = 0;
  this.currentTurn = new Turn();
}


Game.prototype.newTurn = function(){
  if (this.currentTurn.winner === 'player'){
    this.playerCount ++;
  } else if (this.currentTurn.winner === 'computer'){
    this.computerCount ++;
  }

  this.currentTurn = new Turn();
}

var Turn = function(){
  var options = ['rock', 'paper', 'scissors'];
  var randomNum = Math.floor(Math.random() * 3);

  this.playerChoice = '';
  this.computerChoice = options[randomNum];
  this.winner = '';
}

Turn.prototype.addPlayerChoice = function(choice){
  this.playerChoice = choice;
  var compChoice = this.computerChoice;

  var winningChoices = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  }

  if (winningChoices[choice] === compChoice){
    this.winner = 'player';
  } else if (choice === compChoice) {
    this.winner = 'draw';
  } else {
    this.winner = 'computer';
  }
}
