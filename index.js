var inquirer = require("inquirer");

var letter;
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var count = 5;
var wordArr = ["candycane", "gingerbread", "cookies", "ornament", "lights", "star", "christmas", "winter", "eggnog", "tinsel", "santa", "rudolph"]
var letterNum;
var wordShow;
var randomWord = wordArr[Math.floor(Math.random() * (wordArr.length))];
var array = randomWord.split("");
var guesses = [];
var wrongGuesses = [];
var lines = [];
var guessesString;
function displayLines() {
    console.log("\n ***************************");
    console.log("  * * CHRISTMAS HANGMAN * * ");
    console.log(" ***************************\n");
    for (var i = 0; i < array.length; i++) {
        lines.push("_");
    }
    wordShow = lines.join(" ");
    console.log("guesses: " + count);
    console.log("\n" + wordShow + "\n");
}

displayLines();

var askLetter = function () {
    if (count > 0) {
        inquirer.prompt([
            {
                type: "input",
                message: "Choose a letter",
                name: "letter"
            }
        ]).then(function (inquirerResponse) {

            
            letter = inquirerResponse.letter;

            letterNum = array.indexOf(letter);
            if (letter.length !== 1 || !alphabet.includes(letter)) {
                console.log("\nPlease choose one new letter.\n");
                askLetter();
            }

            else if (array.includes(letter) && !guesses.includes(letter)) {
                guesses.push(letter);
                //guessesString = guesses.join(" ");
                if (guessesString && guessesString.length) {
                    console.log("guesses: " + count + " [" + guessesString + "]");
                } else {
                    console.log("guesses: " + count);
                }
                for (var j = 0; j < array.length; j++) {

                    if (array[j] === letter) {

                        letterNum = j;
                        lines.splice(letterNum, 1, letter);

                    }
                }
                wordShow = lines.join(" ");
                console.log("\n" + wordShow + "\n");
                if (!wordShow.includes("_")) {
                    console.log("\n ***************************");
                    console.log("   * * * * YOU WIN * * * * ");
                    console.log(" ***************************\n");
                } else {
                    askLetter();
                }

            } else if (guesses.includes(letter)) {
                console.log("Letter already chosen. Please choose a new letter.");
                // wordShow = lines.join(" ")
                if (guessesString && guessesString.length) {
                    console.log("guesses: " + count + " [" + guessesString + "]");
                } else {
                    console.log("guesses: " + count)
                }
                console.log("\n" + wordShow + "\n")
                askLetter();

            } else if (!array.includes(letter)) {
                count--
                guesses.push(letter);
                wrongGuesses.push(letter);
                guessesString = wrongGuesses.join(" ");
                wordShow = lines.join(" ")
                if (guessesString && guessesString.length) {
                    console.log("guesses: " + count + " [" + guessesString + "]");
                } else {
                    console.log("guesses: " + count)
                }
                console.log("\n" + wordShow + "\n")
                
                askLetter();

            } else {
                console.log("\noops! something broke...\n");
            }

            if (count === 0) {
                console.log(" * The word was: " + randomWord + " *")
                console.log("\n ***************************");
                console.log("  * * * * GAME OVER * * * *");
                console.log(" ***************************\n");
            }


        })
    }
}

askLetter();
// inquirer.prompt();
// for (var i = 0; i < randomWord.length; i++) {
// console.log(randomWord.split("")[i]);
// }

// 
    // * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

    //   * Randomly selects a word and uses the `Word` constructor to store it

    //   * Prompts the user for each guess and keeps track of the user's remaining guesses