

$(document).ready(function () {
    $("#win").text(winning);
    $("#loss").text(losses);
    $("#number").text(number);
    $("#your").text(userInput);


    var winning = 0;
    var losses = 0;
    var number = Math.floor(Math.random() * 100) + 1;

    var userInput = 0;


    var button1 = Math.floor(Math.random() * 10) + 1;
    var button2 = Math.floor(Math.random() * 10) + 1;
    var button3 = Math.floor(Math.random() * 10) + 1;
    var button4 = Math.floor(Math.random() * 10) + 1;

     $("#number").text(number);


    $("#button1").click(function () {
        var valueholder = button1;
        userInput = userInput + valueholder;
        $("#your").text(userInput);
        console.log(valueholder);

        if (userInput > number) {
            var valueholder = 1;
            losses = losses + valueholder;
            $("#loss").text(losses);
        } else if (userInput === number) {
            var valueholder = 1;
            winning = winning + valueholder;
            $("#win").text(winning);
        }

        if (losses > 1) {
            alert("You lost! Please reload to play again");
        }else if (winning > 1) {
            alert("You won! please reload to play again");
        }





    });

    $("#button2").click(function () {
        var valueholder = button2;
        userInput = userInput + valueholder;
        $("#your").text(userInput);
        console.log(valueholder);

        if (userInput > number) {
            var valueholder = 1;
            losses = losses + valueholder;
            $("#loss").text(losses);
        } else if (userInput === number) {
            var valueholder = 1;
            winning = winning + valueholder;
            $("#win").text(winning);
        }


        if (losses > 1) {
            alert("You lost! Please reload to play again");
        }

        if (winning > 1) {
            alert("You won! please reload to play again");
        }





    });

    $("#button3").click(function () {
        var valueholder = button3;
        userInput = userInput + valueholder;
        $("#your").text(userInput);
        console.log(valueholder);

        if (userInput > number) {
            var valueholder = 1;
            losses = losses + valueholder;
            $("#loss").text(losses);
        } else if (userInput === number) {
            var valueholder = 1;
            winning = winning + valueholder;
            $("#win").text(winning);
        }

        if (losses > 1) {
            alert("You lost! Please reload to play again");
        }

        if (winning > 1) {
            alert("You won! please reload to play again");
        }

    });




    $("#button4").click(function () {
        var valueholder = button4;
        userInput = userInput + valueholder;
        $("#your").text(userInput);
        console.log(valueholder);

        if (userInput > number) {
            var valueholder = 1;
            losses = losses + valueholder;
            $("#loss").text(losses);
        } else if (userInput === number) {
            var valueholder = 1;
            winning = winning + valueholder;
            $("#win").text(winning);
        }

        if (losses > 1) {
            alert("You lost! Please reload to play again");
        }

        if (winning > 1) {
            alert("You won! please reload to play again");
        }

    });




});
