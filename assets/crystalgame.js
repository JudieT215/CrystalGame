
$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 60) + 30;

    $("#number-to-guess").text(targetNumber);

    var wins = 1;
    var lost = 1;
    var userTotal = 0;


    //Give each crystal a random value   
    var crystalValues1 = Math.floor(Math.random() * 12 + 1);
    var crystalValues2 = Math.floor(Math.random() * 12 + 1);
    var crystalValues3 = Math.floor(Math.random() * 12 + 1);
    var crystalValues4 = Math.floor(Math.random() * 12 + 1);


    var imageCrystal = $("<img>");
    imageCrystal.attr("data-crystalvalue1", crystalValues1);
    imageCrystal.attr("data-crystalvalue2", crystalValues2);
    imageCrystal.attr("data-crystalvalue3", crystalValues3);
    imageCrystal.attr("data-crystalvalue4", crystalValues4);

    crystalValues1 = parseInt(crystalValues1);
    crystalValues2 = parseInt(crystalValues2);
    crystalValues3 = parseInt(crystalValues3);
    crystalValues4 = parseInt(crystalValues4);



    // When each box is clicked - Done
    // add value to the array usertotal - Done
    //When a crystal is clicked it will add till userTotal is either = to targetnumber.
    $("#crystals1").on("click", function () {
        userTotal += crystalValues1;
        $("#number-added").text("New total= " + userTotal);
        imageCrystal.attr("data-crystalvalue")
        if (userTotal == targetNumber) {
            alert("You win!");
            $("#win").text(wins);
            wins++;
            reset();

        }
        else if (userTotal >= targetNumber) {
            alert("You lose!!");
            $("#lost").text(lost);
            lost++;
            reset();

        };
    });
    $("#crystals2").on("click", function () {
        userTotal += crystalValues2;
        $("#number-added").text("New total= " + userTotal);
        imageCrystal.attr("data-crystalvalue");
        if (userTotal === targetNumber) {
            alert("You win!");
            $("#win").text(wins);
            wins++;
            reset();


        }
        else if (userTotal >= targetNumber) {
            alert("You lose!!");
            $("#lost").text(lost);
            lost++;
            reset();

        };
    });
    $("#crystals3").on("click", function () {
        userTotal += crystalValues3;
        $("#number-added").text("New total= " + userTotal);
        imageCrystal.attr("data-crystalvalue");
        if (userTotal === targetNumber) {
            alert("You win!");
            $("#win").text(wins);
            wins++;
            reset();



        }
        else if (userTotal >= targetNumber) {
            alert("You lose!!");
            $("#lost").text(lost);
            lost++;
            reset();

        };
    });

    $("#crystals4").on("click", function () {
        userTotal += crystalValues4;
        $("#number-added").text("New total= " + userTotal);
        imageCrystal.attr("data-crystalvalue");
        if (userTotal === targetNumber) {
            alert("You win!");
            $("#win").text(wins);
            wins++;
            reset();

        }
        else if (userTotal >= targetNumber) {
            alert("You lose!!");
            $("#lost").text(lost);
            lost++;
            reset();

        }
    });
});

//reset function - I would like to resent my userTotal back to zero -
function reset() {
    var targetNumber = Math.floor(Math.random() * 60) + 30;

    $("#number-to-guess").text(targetNumber);

    var crystalValues1 = Math.floor(Math.random() * 12 + 1);
    var crystalValues2 = Math.floor(Math.random() * 12 + 1);
    var crystalValues3 = Math.floor(Math.random() * 12 + 1);
    var crystalValues4 = Math.floor(Math.random() * 12 + 1);


    var imageCrystal = $("<img>");
    imageCrystal.attr("data-crystalvalue1", crystalValues1);
    imageCrystal.attr("data-crystalvalue2", crystalValues2);
    imageCrystal.attr("data-crystalvalue3", crystalValues3);
    imageCrystal.attr("data-crystalvalue4", crystalValues4);

    crystalValues1 = parseInt(crystalValues1);
    crystalValues2 = parseInt(crystalValues2);
    crystalValues3 = parseInt(crystalValues3);
    crystalValues4 = parseInt(crystalValues4);

    var userTotal = 0;
    $('#number-added').removeData(userTotal);
    $('#number-added').text(userTotal);


} 
