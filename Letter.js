var Letter = function (value) {
    this.value = value;
    this.guessed = false;
    this.letterMatch = function(userLetter) {
        if (value == userLetter) {
            this.guessed = true;   
        } 
    }
}
module.exports = Letter;