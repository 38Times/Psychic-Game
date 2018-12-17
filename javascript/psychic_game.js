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


document.onkeyup = function (event) {

    
    var userGuess = event.key;

    var computerGuess =
        computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
    userGuessArr.push(userGuess);
    document.getElementById("user-guess").innerHTML = userGuessArr.join(", ");

    
    if (userGuess === computerGuess) {
        guessLeft = 9;
        winNum += 1;
        userGuessArr = [];
    } else if (userGuess !== computerGuess) {
        guessLeft -= 1;
        console.log(guessLeft);
        
        if (guessLeft === 0) {
            guessLeft = 9;
            loseNum += 1;
            userGuessArr = [];
        }
    }
    
    document.getElementById("win-num").textContent = winNum;

    document.getElementById("lose-num").textContent = loseNum;

    document.getElementById("guess-left").textContent = guessLeft;
};