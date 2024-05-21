"use strict";
//getting the secret word
let words = ["boitumelo","jimmy","anna","water",];
let word = words[Math.floor(Math.random()*words.length)];

//creating an empty answer array
let answerArray = [];
for (let i = 0; i< word.length; i++){
    answerArray[i] = "_";
};

let remainingLetters = word.length;

let guess ;
let limit = word.length;
alert("open the console if you wan't to cheat on the game!!");
console.log(word);
//main game loop
while(remainingLetters > 0 && limit > 0){
    //game code goes here
    //show the player thei progress
    alert(answerArray.join(" "));
    //take input from the player
    //alert("The answer is " + word)
    guess = prompt(`Guess a single letter or click cancel to end the game you have ${limit} chances left: `);
    limit--;
    
    if (guess === null){
        alert("You quit the game. Please try again next time.")
        break;
    }else if(guess.length !== 1){
        alert("Please enter a single letter");
    }else{
        guess = guess.toLowerCase();
        //update answerArray to remainingLetters for ever guess
        for (let j = 0; j< word.length; j++){
            if(word[j]=== guess){
                if (answerArray[j] === "_"){
                    answerArray[j] = guess;
                    remainingLetters--;
                }else{
                    alert("youve guessed the letter");
                    break;
                }
            }
        }
    }
};
if(remainingLetters === 0){
    alert("Congratulations! the answer was "+ answerArray.join(" "));
};
if(limit === 0){
    alert("You ran out of guesses");
};
alert("The answer was "+ word);