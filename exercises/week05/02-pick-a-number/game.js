function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

// Your task:
function check() {
    // your code here
 let playerGuess =  document.querySelector("#guess").value; //string
 let message;
  playerGuess = Number[playerGuess]; //Converting to a # and store it back in playerGuess = a number
  //pretend the secret = 56 and pretend player guess is 12. 
  if (playerGuess < secret) {
    message = "Too low!";
  } else if (playerGuess > secret) {
    message = "Too high!";
  } else {
    message = "You win!";
  }
   document.querySelector ('#message').innerHTML = message;
}
