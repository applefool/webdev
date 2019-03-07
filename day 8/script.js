
//part 1

var losecounter = 0
var wincounter = 0
var drawcounter = 0

function userStart(guess) {
    // initializing
    var counter = document.getElementsByClassName("counter")[0];
    counter.style.display = "block";
    document.getElementById("botImage").style.display = "none";
    document.getElementById("desc").style.display = "none";
    //document.getElementById("desc").innerHTML = "";
    counter.innerHTML = "3" ;

    setTimeout(() => {
        counter.innerHTML = "2" ;
    }, 1000);
    setTimeout(() => {
        counter.innerHTML = "1" ;
    }, 2000);
    setTimeout(() => {
        counter.style.display = "none";
        userGuess(guess);
    }, 3000);
}

function userGuess(guess) {

    var botPaper = "./paper.png";
    var botRock = "./rock.png";
    var botScissor = "./scissor.png";

    var botImage = document.getElementById("botResult");

    document.getElementById("botImage").style.display = "block";
    document.getElementById("desc").style.display = "block";

    if (guess == "rock" && computerChoice == "rock") {
        drawcounter++
        document.getElementById("drawCount").innerHTML = drawcounter
        botImage.src = botRock;
        document.getElementById("desc").innerHTML = "Draw";
        //alert("Draw! haha you cannot win")
    }
    else if (guess == "rock" && computerChoice == "paper") {
        losecounter++
        document.getElementById("loseCount").innerHTML = losecounter
        botImage.src = botPaper;
        document.getElementById("desc").innerHTML = "Lose";
        //alert("Loser, haha you are dump")
    }
    else if (guess == "rock" && computerChoice == "scissors") {
        wincounter++
        document.getElementById("winCount").innerHTML = wincounter
        botImage.src = botScissor;
        document.getElementById("desc").innerHTML = "Win";
        //alert("Win, I will beat you again")
    }
    else if (guess == "paper" && computerChoice == "paper") {
        drawcounter++
        document.getElementById("drawCount").innerHTML = drawcounter
        botImage.src = botPaper;
        document.getElementById("desc").innerHTML = "Draw";
        //alert("Draw! haha you cannot win")
    }
    else if (guess == "paper" && computerChoice == "scissors") {
        losecounter++
        document.getElementById("loseCount").innerHTML = losecounter
        botImage.src = botScissor;
        document.getElementById("desc").innerHTML = "Lose";
        //alert("Loser, haha you are dump")
    }
    else if (guess == "paper" && computerChoice == "rock") {
        wincounter++
        document.getElementById("winCount").innerHTML = wincounter
        botImage.src = botRock;
        document.getElementById("desc").innerHTML = "Win";
        //alert("Win, I will beat you again")
    }
    else if (guess == "scissors" && computerChoice == "scissors") {
        drawcounter++
        document.getElementById("drawCount").innerHTML = drawcounter
        botImage.src = botScissor;
        document.getElementById("desc").innerHTML = "Draw";
       // alert("Draw! haha you cannot win")
    }
    else if (guess == "scissors" && computerChoice == "paper") {
        wincounter++
        document.getElementById("winCount").innerHTML = wincounter
        botImage.src = botPaper;
        document.getElementById("desc").innerHTML = "Win";
        //alert("Win, I will beat you again")
    }
    else if (guess == "scissors" && computerChoice == "rock") {
        losecounter++
        document.getElementById("loseCount").innerHTML = losecounter
        botImage.src = botRock;
        document.getElementById("desc").innerHTML = "Lose";
        //alert("Loser, haha you are dump")
    }

    computerChoose()
}




//part2
var options = ["paper", "rock", "scissors"]
var computerChoice

function computerChoose() {
    var randomNumber = Math.floor(Math.random() * options.length)
    computerChoice = options[randomNumber]
    //alert(computerChoice)
}

computerChoose()
