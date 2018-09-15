var userTotal = 0;
var wins = 0;
var losses = 0;

var characters = {
    "Deadpool": {
      name: "Deadpool",
      health: 190,
      attack: 13,
      imageUrl: "../images/pool.jpg",
      enemyAttackBack: 30
    },
    "Goot": {
      name: "Groot",
      health: 180,
      attack: 14,
      imageUrl: "../images/groot.jpg",
      enemyAttackBack: 7
    },
    "Duck Dogers": {
      name: "Duck Dogers",
      health: 190,
      attack: 18,
      imageUrl: "../images/duck.png",
      enemyAttackBack: 18
    },
    "Spider-Man": {
      name: "Spider-Man",
      health: 90,
      attack: 10,
      imageUrl: "../images/man.jpg",
      enemyAttackBack: 30
    }
  };
  
  $("#hitBox").on("click",function(){


if ($("#defender").children().length !== 0) {
    // Creates messages for our attack and our opponents counter attack.
    var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage.";
    var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";
    clearMessage();

    // Reduce defender's health by your attack value.
    defender.health -= attacker.attack * turnCounter;



});
$("#winnings").text(wins);
$("#lossings").text(losses);
