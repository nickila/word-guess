var Word = require("./Word.js");
var inquirer = require("inquirer")
var wordList = ["peppermint", "gingerbread", "cookies", "ornament", "lights", "star", "christmas", "winter", "eggnog", "tinsel", "santa", "rudolph",
    "snowflake", "mistletoe", "holly", "fruitcake"]
var gameWord;
var playWord;
function newWord() {
    gameWord = wordList[Math.floor(Math.random() * (wordList.length))];
    playWord = new Word(gameWord);
    console.log("\n ***************************");
    console.log("  * * CHRISTMAS HANGMAN * * ");
    console.log(" ***************************\n");
    console.log("Guesses: " + playWord.count + "\n")
}
newWord();

playWord.initArray(gameWord);
function askLetter() {
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
            playWord.letterCheck(userLetter);
            console.log("Guesses: " + playWord.count);
            playWord.initArray(gameWord);

            askLetter();
        });
    } else {
        console.log(" * The word was: " + gameWord + " *")
        console.log("\n ***************************");
        console.log("  * * * * GAME OVER * * * *");
        console.log(" ***************************\n");
    }
    if (!playWord.str.includes("_")) {
        console.log("\n ***************************");
        console.log("   * * * * YOU WIN * * * * ");
        console.log(" ***************************\n");
        newWord();
        playWord.initArray(gameWord);
    }
}
//}
askLetter();

// word.printWord();
// word.initArray(randomWord);

            //letter = inquirerResponse.letter;