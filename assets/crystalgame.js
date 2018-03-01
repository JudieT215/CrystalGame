


    var targetNumber = Math.floor(Math.random() * 60) + 30;

    $("#number-to-guess").text(targetNumber);

    var wins = 0;
    var lost = 0;
    var userTotal = 0;
    $("#lost").text(lost);
    $("#win").text(wins);
    $('#number-added').text(userTotal);

    //Give each crystal a random value   
    var crystalValues1 = Math.floor(Math.random() * 12 + 1);
    var crystalValues2 = Math.floor(Math.random() * 12 + 1);
    var crystalValues3 = Math.floor(Math.random() * 12 + 1);
    var crystalValues4 = Math.floor(Math.random() * 12 + 1);


    // When each box is clicked - Done
    // add value to the array usertotal - Done
    //When a crystal is clicked it will add till userTotal is either = to targetnumber.
    $("#crystals1").on("click", function () {
        userTotal += crystalValues1;
        $("#number-added").text("New total= " + userTotal);
        if (userTotal == targetNumber) {
            alert("You win!");
            wins++;
            $("#win").text(wins);
            reset();

        }
        else if (userTotal > targetNumber) {
            alert("You lose!!");
            lost++;
            $("#lost").text(lost);
            reset();

        };
    });
    $("#crystals2").on("click", function () {
        userTotal += crystalValues2;
        $("#number-added").text("New total= " + userTotal);
        if (userTotal === targetNumber) {
            alert("You win!");
            wins++;
            $("#win").text(wins);
            reset();


        }
        else if (userTotal > targetNumber) {
            alert("You lose!!");
            lost++;
            $("#lost").text(lost);
            reset();

        };
    });
    $("#crystals3").on("click", function () {
        userTotal += crystalValues3;
        $("#number-added").text("New total= " + userTotal);
        if (userTotal === targetNumber) {
            alert("You win!");
            wins++;
            $("#win").text(wins);
            reset();



        }
        else if (userTotal > targetNumber) {
            alert("You lose!!");
            lost++;
            $("#lost").text(lost);
            reset();

        };
    });

    $("#crystals4").on("click", function () {
        userTotal += crystalValues4;
        $("#number-added").text("New total= " + userTotal);
        if (userTotal === targetNumber) {
            alert("You win!");
            wins++;
            $("#win").text(wins);
            reset();

        }
        else if (userTotal > targetNumber) {
            alert("You lose!!"); 
            lost++;
            $("#lost").text(lost);
           
            reset();

        }
    });

//reset function - I would like to resent my userTotal back to zero -
function reset() {
    targetNumber = Math.floor(Math.random() * 60) + 30;

    $("#number-to-guess").text(targetNumber);

    crystalValues1 = Math.floor(Math.random() * 12 + 1);
    crystalValues2 = Math.floor(Math.random() * 12 + 1);
    crystalValues3 = Math.floor(Math.random() * 12 + 1);
    crystalValues4 = Math.floor(Math.random() * 12 + 1);

   userTotal = 0;
    $('#number-added').text(userTotal);


} 


   // //allow the images to have the value
    // var imageCrystal = $("<img>");
    // imageCrystal.attr("data-crystalvalue1", crystalValues1);
    // imageCrystal.attr("data-crystalvalue2", crystalValues2);
    // imageCrystal.attr("data-crystalvalue3", crystalValues3);
    // imageCrystal.attr("data-crystalvalue4", crystalValues4);

    // crystalValues1 = parseInt(crystalValues1);
    // crystalValues2 = parseInt(crystalValues2);
    // crystalValues3 = parseInt(crystalValues3);
    // crystalValues4 = parseInt(crystalValues4);