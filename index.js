var Word = require("./Word.js");
var inquirer = require("inquirer")
var gameWord = "hammer";
var playWord = new Word(gameWord);
playWord.initArray(gameWord);
var count = 5;

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
            playWord.letterCheck(userLetter)
            playWord.initArray(gameWord);
            askLetter();
        });
    }
}
askLetter();

// word.printWord();
// word.initArray(randomWord);

            //letter = inquirerResponse.letter;