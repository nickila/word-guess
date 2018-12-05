var Letter = function(letter, guessed) {
    this.letter = letter;
    this.guessed = guessed;
    var guessedLetter = function() {
        if (letter === guessed) {
            console.log(letter);
            } else {
                console.log("_");
            }
        }
    }


// 3. `Letter.js` *should not* `require` any other files.
//     * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
// computer chooses a word from a list of words in an array. console log a string of underline dashes with however many letters are in the word. if the user guesses a letter that's in the word, that letter gets put into the string in the location it should be in, replacing the dash. user is prompted to guess another letter. if an letter is chosen that's not in the string, the wrong letter gets put into an array of wrong letters.
}