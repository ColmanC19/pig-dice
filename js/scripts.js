// Business Logic for Game---------

function Game(playerTurn, roll) {
  this.playerTurn = turn; //points
  this.roll = roll; //bank
}
Game.prototype.changeTurn = function() {
  var blank = 1;
  var player = "player";

  if ((roll === 1) && (blank === 1)) {
    player + blank.clearTotal();
    document.getElementsByClassName('player1').toggleClass("activePlayer");
    document.getElementByClassName("player2").toggleClass("activePlayer");
    blank += 1;
  } else {
    player + blank.clearTotal();
    document.getElementsByClassName('player1').toggleClass("activePlayer");
    document.getElementByClassName("player2").toggleClass("activePlayer");
    blank -= 1;
  }
}

Game.prototype.roll = function(roll) {
  var rollDice = function() {
  roll = Math.floor((Math.random() * 6) + 1);
 this.currentRoll = roll;
}


// Bus Logic for Player-------

function Player(subTotal, currentGrandTotal){
  this.subTotal = subTotal;
  this.currentGrandTotal = currentGrandTotal;
  this.currentRoll = 0;

}

Player.prototype.addTotal = function(addTotal) {
  if (this.roll > 1) {
    currentGrandTotal += this.currentRoll + subTotal;
  } else {
    this.subTotal = 0;
  }
        alert("sucks to be you");
  }

Player.prototype.clearTotal = function() {
  this.subTotal = 0;
}

var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

var rolls =[];
var score = 0;
var bank = 0;
 var rollDice = function() {


  roll = Math.floor((Math.random() * 6) + 1);

  rolls.push(roll);

    //if roll 1 then points clear and next player turn
};




// rolls.reduce(totalScore);


//User Logic




$(document).ready(function() {
 $("form#playGame").submit(function(event) {
   event.preventDefault();
 });



  $(".btn-dark").click(function() {
    $(".game").show();
    $(".btn-dark").hide();
  });
  $(".rollButton").click(function () {
    rollDice();
    score = rolls.reduce(totalScore);
    function totalScore(total, num) {
      return total + num;
    }

    console.log(score);
})
})
};
