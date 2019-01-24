var computerChoices = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];


var winNum = 0;
var loseNum = 0;
var guessLeft = 9;
var userGuessArr = [];
var computerGuess = '';

var setupNewGame = function() {
    guessLeft = 9;
    userGuessArr = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function (event) {

    
    var userGuess = event.key;

    console.log(computerGuess);
    userGuessArr.push(userGuess);
    document.getElementById("user-guess").innerHTML = userGuessArr.join(", ");

    
    if (userGuess === computerGuess) {

        winNum += 1;
        setupNewGame();
    } else if (userGuess !== computerGuess) {
        guessLeft -= 1;
        
        
        if (guessLeft === 0) {
            loseNum += 1;
            setupNewGame();
        }
    }
    
    document.getElementById("win-num").textContent = winNum;

    document.getElementById("lose-num").textContent = loseNum;

    document.getElementById("guess-left").textContent = guessLeft;
};

setupNewGame();
console.log(computerGuess);

