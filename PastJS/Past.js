alert("This man has been condemned to die!");
alert("Find the correct word to set him free and acquire the key!");

document.addEventListener("DOMContentLoaded", () => {

const words = ["javascript", "hangman", "developer", "browser", "function"];
const word = words[Math.floor(Math.random() * words.length)];
let guessed = [];
let wrong = [];
let Count = 0;

const wordDiv = document.getElementById("word");
const wrongDiv = document.getElementById("wrong-guesses");
const messageDiv = document.getElementById("message");
const keyboardDiv = document.getElementById("keyboard");
const hangmanImage = document.getElementById("hangman-image");

function updateWordDisplay() {
  wordDiv.innerHTML = word
    .split("")
    .map(letter => (guessed.includes(letter) ? letter : "_"))
    .join(" ");
}

function checkGameStatus() {
  if (wrong.length >= 6) {
    messageDiv.textContent = "Congratulations! You won!";
    disableAllButtons();
  }
}

function disableAllButtons() {
  document.querySelectorAll(".letter-btn").forEach(btn => btn.disabled = true);
}

function createKeyboard() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  letters.split("").forEach(letter => {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.className = "letter-btn";
    btn.addEventListener("click", () => handleGuess(letter, btn));
    keyboardDiv.appendChild(btn);
  });
}

function handleGuess(letter, btn) {
  btn.disabled = true;
  if (word.includes(letter)) {
    guessed.push(letter);
  } else {
    wrong.push(letter);
    wrongDiv.textContent = wrong.join(" ");

    
    Count++;
      if (Count === 0) {
        hangmanImage.src = 
        `https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png`;
      }
      if (Count === 1) {
        hangmanImage.src = 
        `https://media.geeksforgeeks.org/wp-content/uploads/20240215173033/1.png`;
      }
      if (Count === 2) {
        hangmanImage.src = 
        
        `https://media.geeksforgeeks.org/wp-content/uploads/20240215173038/2.png`;
      }
      if (Count === 3) {
        hangmanImage.src = 
        `https://media.geeksforgeeks.org/wp-content/uploads/20240215172733/3.png`;
      }
      if (Count == 4) {
        hangmanImage.src = 
        `https://media.geeksforgeeks.org/wp-content/uploads/20240215173815/4.png`;
      }
      if (Count === 5) {
        hangmanImage.src = 
        `https://media.geeksforgeeks.org/wp-content/uploads/20240215173859/5.png`;
      }
      if (Count === 6) {
        hangmanImage.src =
        `https://media.geeksforgeeks.org/wp-content/uploads/20240215173931/6.png`;
      }
      // hangmanImage.src = 
      `images/hangman-${Count}.svg`;
    }
  }

  updateWordDisplay();
  checkGameStatus();
  createKeyboard();

})
