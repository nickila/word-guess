var Letter = require("./Letter.js");

var Word = function (word) {
    this.word = word;
    this.arrWord = [];
    this.newArr = [];
    this.str = "";
    this.usedArr = [];
    this.usedStr = "";
    //this.str = "";
    // this.printWord = function () {

    // }
    this.letterCheck = function (userLetter) {
        
        //console.log(this.arrWord);
        for (i = 0; i < this.arrWord.length; i++) {
            this.arrWord[i].letterMatch(userLetter);
        }
        
        this.usedArr.push(userLetter);
        this.usedStr = this.usedArr.join(" ");
        console.log(this.usedStr);

    }
    // this.printOutput = function ()

    this.initArray = function (word) {

        this.str = "";
        this.newArr = [];
        for (i = 0; i < word.length; i++) {
            this.arrWord.push(new Letter(word[i]));

            if (this.arrWord[i].guessed == true) {
                this.newArr.push(this.arrWord[i].value);

            } else {
                var dash = "_";
                this.newArr.push(dash);
            }
        }

        this.str = this.newArr.join(" ");
        console.log(this.str)
        if (!this.str.includes("_")) {
            console.log("\n ***************************");
            console.log("   * * * * YOU WIN * * * * ");
            console.log(" ***************************\n");
        }
    }
}


module.exports = Word;