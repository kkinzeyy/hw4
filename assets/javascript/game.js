let randomNumber;
let loss = 0;
let win = 0;
let score = 0;

//start or restart
var restart = function() {
  $(".crystals").empty();

  // images for crystals
  var images = [];

  // random number for goal
  randomNumber = Math.floor(Math.random() * 120);
  $("#score").html("Goal:" + randomNumber);
  console.log(randomNumber);

  // each crystal needs a random value between 1-12
  for (var i = 0; i < 4; i++) {
    console.log("Works");
    var random = Math.floor(Math.random() * 12);

    // create 4 crystals with value in html
    var crystal = $("<div>");
    crystal.attr({
      class: "crystal",
      "data-random": random
    });
    crystal.html(random);

    $(".crystals").append(crystal);
  }
  // add crystal value to score
  $("#previous").html("Total score: " + score);
};

// reset
restart();

$(document).on("click", ".crystal", function() {
  var num = parseInt($(this).attr("data-random"));
  previous += num;
  $("#previous").html("total score: " + previous);

  if (previous > randomNumber) {
    loss++;
    $("#loss").html("Sorry! you lose" + loss);
    previous = 0;
    restart();
  } else if (previous === randomNumber) {
    win++;
    $("#win").html("Congratulations! You win!" + win);
    previous = 0;
    restart();
  }
});
// game with 4 crystals and random result
// every time the game restarts crystals need a new value
// selecting a crystal should add its value to a score
// until the user meets or exceeds the goal
// if exceeds goal add a loss
// if equals goal add a win
