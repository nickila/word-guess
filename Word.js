var Letter = require("./Letter.js");

var Word = function (word) {
    this.word = word;
    this.arrWord = [];
    this.newArr = [];
    this.str = "";
    this.usedArr = [];
    this.usedStr = "";
    this.count = 5;
    
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

            //console.log("Guesses: " + this.count);
            
        } else {
            
            //console.log("Guesses: " + this.count + );
            correctLetters = 0;
        }
         if (!this.usedArr.includes(userLetter)) {
        this.usedArr.push(userLetter);
        this.usedStr = this.usedArr.join(" ");
        console.log("Letter Box: [" + this.usedStr + "]\n");
         } else {
             console.log("Please choose one new letter.");
             console.log("Letter Box: [" + this.usedStr + "]\n");
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
        console.log(this.str + "\n");
    }
}


module.exports = Word;