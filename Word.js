
var Letter = require("./Letter.js");

var Word = function (word) {
    this.word = word;
    this.arrWord = [];
    this.printWord = function () {
        console.log(word);
        for (i = 0; i < this.arrWord.length; i++) {
            if (guessed) {
                console.log("123 " + word)
            }
        }
    }
    this.letterCheck = function (letterToBeGuessed) {
        console.log(arrWord);
        for (i = 0; i < this.arrWord.length; i++) {
            if (letterToBeGuessed === arrWord[i]) {
                console.log(letterToBeGuessed);
            } else {
                console.log("_ ")
            }
        }
    }


    this.initArray = function (word) {
        for (i = 0; i < word.length; i++) {
            this.arrWord.push(new Letter(word[i], false))
        }
    }
}
    module.exports = Word;