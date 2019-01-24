
console.log("hello");

let randomGoal;
let loss = 0;
let win = 0;
let userScore = 0;

// game with 4 crystals and randomGoal
// crystals = random number every game (1-15)

//$(".crystal").attr('class', 'red');
let start = function () {
    $(".crystals").empty();
    let images =
        ['https://www.thoughtco.com/thmb/Vr8ASQcPP6dybisLar_j-Kq1yLFyZY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bismuth-metal-elementary-hopper-crystals-step-lattice-formation-130890310-575c9b313df78c98dc85e109.jpg', 'https://www.healingwithcrystals.net.au/uploads/1/5/5/7/15572098/green-malachite_1.jpg', 'http://thehealingchest.com/assets/images/stones/tanzanite.jpg', 'http://www.crystalage.com/img/products/black-tourmaline-schorl-healing-crystal-medium_1.jpg']

    randomGoal = Math.floor(Math.random() * 100) + 30;

    console.log(randomGoal);
    $("#userGoal").html('User Goal!:' + randomGoal);

    for (let i = 0; i < 4; i++) {

        let random = Math.floor(Math.random() * 14 + 1);
        console.log(random)

        let crystal = $("<div>");

        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "background-image": "url ('" + images[i] + "')",
            "background-size": "cover"
        });
        console.log(images[i]);
        $(".crystals").append(crystal);
    }

    $("#userScore").html("Score:" + userScore);

}


start();

$(document).on('click', ".crystal", function () {
    let num = parseInt($(this).attr('data-random'));
    userScore += num;
    $("#userScore").html("Score:" + userScore);
    console.log(userScore);
    if (userScore > randomGoal) {
        loss++;
        $("#loss").html("Losses!:" + loss);
        userScore = 0;
        start();
        console.log("you lose");
    }
    else if (userScore === randomGoal) {
        win++;
        $("#win").html("Wins!:" + win);
        userScore = 0;
        console.log("you win");
        start();
    }

});
// click crystal to add to user score
// user score = goal = win
// user score over = goal = lose + reset