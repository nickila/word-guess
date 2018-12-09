var Letter = function (value, guessed) {
    this.value = value;
    this.guessed = false;
    this.str = "";
    this.letterMatch = function(userLetter) {
        //console.log(value);
        //console.log(userLetter);
        if (value == userLetter) {
            this.guessed = true; 
            //console.log("value: " + value);
        }
    }
    this.printWord = function() {
        if (guessed) {
            console.log("value2: " + value);
        } else {
            console.log("_ ");
        }
        //console.log(this.str)
    }
}
module.exports = Letter;