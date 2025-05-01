alert("This man has been condemned to die!");
alert("Find the correct word to set him free and acquire the key!");

const words = ["javascript", "hangman", "developer", "browser", "function"];
const word = words[Math.floor(Math.random() * words.length)];
let guessed = [];
let wrong = [];

const wordDiv = document.getElementById("word");
const wrongDiv = document.getElementById("wrong-guesses");
const messageDiv = document.getElementById("message");
const keyboardDiv = document.getElementById("keyboard");

function updateWordDisplay() {
  wordDiv.innerHTML = word
    .split("")
    .map(letter => (guessed.includes(letter) ? letter : "_"))
    .join(" ");
}

function checkGameStatus() {
  if (wrong.length >= 6) {
    messageDiv.textContent = `You lost! The word was "${word}".`;
    disableAllButtons();
  } else if (word.split("").every(letter => guessed.includes(letter))) {
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
  }
  updateWordDisplay();
  checkGameStatus();
}

// Initialize
updateWordDisplay();
createKeyboard();
