var Word = require("./Word.js");
var inquirer = require("inquirer")
var wordList = ["peppermint", "gingerbread", "cookies", "ornament", "lights", "star", "christmas", "winter", "eggnog", "tinsel", "santa", "rudolph",
    "snowflake", "mistletoe", "holly", "fruitcake"]
var gameWord;
var playWord;
var wins = 0;
function newWord() {
    gameWord = wordList[Math.floor(Math.random() * (wordList.length))];
    playWord = new Word(gameWord);
    console.log("\n ***************************");
    console.log("  * * CHRISTMAS HANGMAN * * ");
    console.log(" ***************************\n");
    console.log("Wins: " + wins);
    console.log("Guesses: " + playWord.count + "\n");
    playWord.initArray(gameWord);
}
newWord();

function askLetter() {
    if (!playWord.str.includes("_")) {
        console.log("\n ***************************");
        console.log("   * * * * YOU WIN * * * * ");
        console.log(" ***************************\n");
        wins++
        console.log("Wins: " + wins);
        newWord();
        
       
    }
    if (playWord.count > 0) {
        inquirer.prompt([
            {
                type: "input",
                message: "Choose a letter",
                name: "letter"
            }
        ]).then(function (inquirerResponse) {

            var userLetter = inquirerResponse.letter;
            //console.log("Guesses: " + playWord.count);
            console.log("Wins: " + wins);
            console.log("Guesses: " + playWord.count + "\n");
            playWord.letterCheck(userLetter);
            
            playWord.initArray(gameWord);

            askLetter();
        });
    } else {
        console.log(" * The word was: " + gameWord + " *")
        console.log("\n ***************************");
        console.log("  * * * * GAME OVER * * * *");
        console.log(" ***************************\n");
        console.log("Wins: " + wins);
    }
    
}

askLetter();
