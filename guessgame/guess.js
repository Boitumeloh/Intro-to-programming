let secret = Math.floor(Math.random()*21);
//let answer = prompt("Please guess the secret number (1-20): ")
//let guess = parseInt(answer);
while (parseInt(guess) !== secret) {
    var guess = prompt("Please guess the secret number (1-20): ")
    if (guess === null) {
        alert("You quit");
        break;
    }
    if (parseInt(guess) === secret) {
        alert("Correct, guess");
    } else if (parseInt(guess) > secret) {
        alert("Incorrect guess, too high");
    } else if (parseInt(guess) < secret) {
        alert("Incorrect guess, too low");
    }
}