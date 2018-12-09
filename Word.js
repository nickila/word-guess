var Letter = require("./Letter.js");

var Word = function (word) {
    this.word = word;
    this.arrWord = [];
    this.str = "";
    //this.str = "";
    // this.printWord = function () {

    // }
    this.letterCheck = function (userLetter) {
        //console.log(this.arrWord);
        for (i = 0; i < this.arrWord.length; i++) {
            this.arrWord[i].letterMatch(userLetter);
        }
        
    }
    // this.printOutput = function ()

    this.initArray = function(word) {

        console.log(word)
        for (i = 0; i < word.length; i++) {
            this.arrWord.push(new Letter(word[i]));
            if (this.arrWord[i].guessed == true) {
                console.log(this.arrWord[i].value)
            } else {
                console.log("_ ")
            }
            //console.log(str)

           
        }
        //console.log(str);
        
    }

}
    



module.exports = Word;