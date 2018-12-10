var Letter = require("./Letter.js");

var Word = function (word) {
    this.word = word;
    this.arrWord = [];
    this.newArr = [];
    this.str = "";
    this.usedArr = [];
    this.usedStr = "";
    this.count = 5;
    this.wordCheck1;
    this.wordCheck2;
    //this.correctLetters=0;

    this.letterCheck = function (userLetter) {
        var correctLetters = 0;
        for (i = 0; i < this.arrWord.length; i++) {
            // console.log(this.arrWord[i].value);
            // console.log(userLetter)
            
            if (this.arrWord[i].value == userLetter) {
                correctLetters++
            }
            
            this.arrWord[i].letterMatch(userLetter);
            
            
        }
        
        if (correctLetters == 0) {
            this.count--

            console.log("Guesses: " + this.count);
            
        } else {
            
            console.log("Guesses: " + this.count);
            correctLetters = 0;
        }
         if (!this.usedArr.includes(userLetter)) {
        this.usedArr.push(userLetter);
        this.usedStr = this.usedArr.join(" ");
        console.log(this.usedStr);
         } else {
             console.log("Please choose one new letter.");
             console.log(this.usedStr);
         }

        
        
    }
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
        this.wordCheck1 = this.str;
        // if (!this.str.includes("_")) {
        //     console.log("\n ***************************");
        //     console.log("   * * * * YOU WIN * * * * ");
        //     console.log(" ***************************\n");
            
        
    }
}


module.exports = Word;