// Business Logic

function player(subTotal, total) {
  this.subTotal = subTotal; //points
  this.total = total; //bank
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


var player1 = new player(0, 0);
var player2 = new player(0, 0);

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

    if (roll > 1) {
      $(".currentRoll").text(roll);
      $(".activePlayer .currentScore").text(score);

     } else if (roll === 1) {
      roll = "Oops! You rolled a 1!";
      score = 0;
      rolls = [];
      $(".currentRoll").text(roll);
      $(".activePlayer .currentScore").text(score);
      $(".player1").toggleClass("activePlayer");
      $(".player2").toggleClass("activePlayer");
      // $(".currentRoll").toggle(".active");
      }
    });


    $(".holdButton").click(function() {

      if(score > 0) {
        var bank = $(".activePlayer .bank").val();
        bank += score;
        score = 0;
        rolls = [];
        $(".currentRoll").text(roll);
        $(".activePlayer .currentScore").text(score);
      }

      $(".activePlayer .bank").text(bank);
      $(".player1").toggleClass("activePlayer");
      $(".player2").toggleClass("activePlayer");
  });

});
