// Business Logic

function player(subTotal, total, roll) {
  this.subTotal = subTotal; //points
  this.total = total; //bank
  this.roll = 0;
}

player.prototype.addSubTotal = function() {
  this.roll += subTotal;
}

player.prototype.addTotal = function() {
   total += this.roll + subTotal;
}

player.prototype.clearTotal = function() {
  this.subTotal = 0;
}


var player1 = new player(0, 0, 0);
var player2 = new player(0, 0, 0);

var rolls =[];

 var rollDice = function() {


  roll = Math.floor((Math.random() * 6) + 1);

  rolls.push(roll);

    //if player has points =+ roll total; player.addTotal();
    //if roll 1 then points clear and next player turn
};

// rolls.reduce(totalScore);


//User Logic




$(document).ready(function() {


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

    if (roll === 1) {
      roll = 0;
      score = 0;
      $(".player1").toggleClass("activePlayer");
      $(".player2").toggleClass("activePlayer");
      // $(".currentRoll").toggle(".active");
    }

    $(".active").text(roll);
    $(".currentScore").text(score);
  });


  $("form.rollTurn").submit(function(ev) {
    ev.preventDefault();



  });

});
