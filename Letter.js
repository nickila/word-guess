var Letter = function (value, guessed) {
    this.value = value;
    this.guessed = false;
    this.str = "";
    this.letterMatch = function(userLetter) {
        console.log(value);
        console.log(userLetter);
        if (value == userLetter) {
            this.guessed = true; 
            console.log(value);
        }
    }
    this.printWord = function() {
        if (guessed) {
            str.push(value);
        } else {
            str.push("_ ");
        }
        console.log(this.str)
    }
}
module.exports = Letter;