var Word = require("./Word.js");
var inquirer = require("inquirer")
var wordList = ["peppermint", "gingerbread", "cookies", "ornament", "lights", "star", "christmas", "winter", "eggnog", "tinsel", "santa", "rudolph",
    "snowflake", "mistletoe", "holly", "fruitcake"]
var gameWord = wordList[Math.floor(Math.random() * (wordList.length))];
var playWord = new Word(gameWord);
var count = 5;
console.log("\n ***************************");
console.log("  * * CHRISTMAS HANGMAN * * ");
console.log(" ***************************\n");

playWord.initArray(gameWord);
function askLetter() {
    if (count > 0) {
        inquirer.prompt([
            {
                type: "input",
                message: "Choose a letter",
                name: "letter"
            }
        ]).then(function (inquirerResponse) {
            var userLetter = inquirerResponse.letter;
            console.log("guesses: " + count);
            playWord.letterCheck(userLetter)
            playWord.initArray(gameWord);
            askLetter();
        });
    } else {
        console.log("")
    }
}
askLetter();

// word.printWord();
// word.initArray(randomWord);

            //letter = inquirerResponse.letter;